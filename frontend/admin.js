/* ============================================================
   LOCKED-IN — Admin Pages Logic (admin.js)
   ============================================================
   Handles dashboard stats, user management, professional
   application reviews, and report management. Demo data only.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     USER MANAGEMENT PAGE
     ───────────────────────────────────────────────────────── */
  const usersTableBody = document.getElementById('users-table-body');
  if (usersTableBody) {
    const demoUsers = [
      { id: 1, name: 'Alex Morgan',      email: 'alex@example.com',      initials: 'AM', role: 'Professional', status: 'Active',    joined: '2025-08-12' },
      { id: 2, name: 'Jordan Lee',       email: 'jordan@example.com',    initials: 'JL', role: 'Member',       status: 'Active',    joined: '2025-09-03' },
      { id: 3, name: 'Samira Patel',     email: 'samira@example.com',    initials: 'SP', role: 'Professional', status: 'Active',    joined: '2025-07-21' },
      { id: 4, name: 'Marcus Chen',      email: 'marcus@example.com',    initials: 'MC', role: 'Professional', status: 'Active',    joined: '2025-10-01' },
      { id: 5, name: 'Olivia Brooks',    email: 'olivia@example.com',    initials: 'OB', role: 'Member',       status: 'Active',    joined: '2026-01-15' },
      { id: 6, name: 'Derek Williams',   email: 'derek@example.com',     initials: 'DW', role: 'Member',       status: 'Suspended', joined: '2025-11-08' },
      { id: 7, name: 'Nina Rossi',       email: 'nina@example.com',      initials: 'NR', role: 'Admin',        status: 'Active',    joined: '2025-06-01' },
      { id: 8, name: 'Tom Jackson',      email: 'tom@example.com',       initials: 'TJ', role: 'Member',       status: 'Inactive',  joined: '2025-12-20' },
    ];

    function roleClass(r) {
      const map = { Admin: 'badge-accent', Professional: 'badge-primary', Member: 'badge-info' };
      return map[r] || 'badge-muted';
    }
    function statusClass(s) {
      const map = { Active: 'badge-success', Suspended: 'badge-danger', Inactive: 'badge-muted' };
      return map[s] || 'badge-muted';
    }

    function renderUsers(list) {
      usersTableBody.innerHTML = list.map(u => `
        <tr data-user-id="${u.id}">
          <td>
            <div class="user-cell">
              <div class="avatar-placeholder sm">${u.initials}</div>
              <div>
                <div class="user-name">${u.name}</div>
                <div class="user-email">${u.email}</div>
              </div>
            </div>
          </td>
          <td><span class="badge-li badge-dot ${roleClass(u.role)}">${u.role}</span></td>
          <td><span class="badge-li badge-dot ${statusClass(u.status)}">${u.status}</span></td>
          <td>${new Date(u.joined).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
          <td>
            <div class="d-flex gap-1">
              <button class="btn-li-ghost view-user-btn" title="View profile" data-user-id="${u.id}">
                <i class="bi bi-eye"></i>
              </button>
              <div class="dropdown">
                <button class="btn-li-ghost" data-bs-toggle="dropdown" title="Actions">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  ${u.status === 'Active' ? `<li><a class="dropdown-item suspend-user-btn" href="#" data-user-id="${u.id}"><i class="bi bi-pause-circle me-2"></i>Suspend</a></li>` : ''}
                  ${u.status === 'Suspended' ? `<li><a class="dropdown-item activate-user-btn" href="#" data-user-id="${u.id}"><i class="bi bi-play-circle me-2"></i>Reactivate</a></li>` : ''}
                  ${u.status === 'Inactive' ? `<li><a class="dropdown-item activate-user-btn" href="#" data-user-id="${u.id}"><i class="bi bi-play-circle me-2"></i>Activate</a></li>` : ''}
                </ul>
              </div>
            </div>
          </td>
        </tr>
      `).join('');
      const info = document.getElementById('users-table-info');
      if (info) info.textContent = `Showing ${list.length} of ${demoUsers.length} users`;
    }

    renderUsers(demoUsers);

    // Search
    const searchInput = document.getElementById('user-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase().trim();
        renderUsers(demoUsers.filter(u =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.role.toLowerCase().includes(q)
        ));
      });
    }

    // Role filter
    const roleFilter = document.getElementById('role-filter');
    if (roleFilter) {
      roleFilter.addEventListener('change', () => {
        const val = roleFilter.value;
        const q = searchInput?.value.toLowerCase().trim() || '';
        let filtered = demoUsers;
        if (val) filtered = filtered.filter(u => u.role === val);
        if (q) filtered = filtered.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
        renderUsers(filtered);
      });
    }

    // View user
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.view-user-btn');
      if (!btn) return;
      const u = demoUsers.find(u => u.id === parseInt(btn.dataset.userId));
      if (!u) return;
      document.getElementById('viewUserName').textContent = u.name;
      document.getElementById('viewUserEmail').textContent = u.email;
      document.getElementById('viewUserRole').textContent = u.role;
      document.getElementById('viewUserRole').className = `badge-li badge-dot ${roleClass(u.role)}`;
      document.getElementById('viewUserStatus').textContent = u.status;
      document.getElementById('viewUserStatus').className = `badge-li badge-dot ${statusClass(u.status)}`;
      document.getElementById('viewUserJoined').textContent = new Date(u.joined).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      document.getElementById('viewUserInitials').textContent = u.initials;
      new bootstrap.Modal(document.getElementById('viewUserModal')).show();
    });

    // Suspend
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.suspend-user-btn');
      if (!btn) return;
      e.preventDefault();
      const u = demoUsers.find(u => u.id === parseInt(btn.dataset.userId));
      if (!u) return;
      const confirmed = await confirmAction({
        title: 'Suspend User',
        message: `Are you sure you want to suspend ${u.name}?`,
        confirmText: 'Suspend',
        type: 'danger'
      });
      if (confirmed) {
        u.status = 'Suspended';
        renderUsers(demoUsers);
        showToast(`${u.name} has been suspended.`, 'warning');
      }
    });

    // Activate / Reactivate
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.activate-user-btn');
      if (!btn) return;
      e.preventDefault();
      const u = demoUsers.find(u => u.id === parseInt(btn.dataset.userId));
      if (!u) return;
      const confirmed = await confirmAction({
        title: 'Activate User',
        message: `Reactivate ${u.name}'s account?`,
        confirmText: 'Activate',
        type: 'success'
      });
      if (confirmed) {
        u.status = 'Active';
        renderUsers(demoUsers);
        showToast(`${u.name} is now active.`, 'success');
      }
    });
  }

  /* ─────────────────────────────────────────────────────────
     PROFESSIONAL APPLICATIONS PAGE
     ───────────────────────────────────────────────────────── */
  const applicationsContainer = document.getElementById('applications-list');
  if (applicationsContainer) {
    const applications = [
      {
        id: 1, name: 'Sarah Kim', initials: 'SK', email: 'sarah.kim@example.com',
        type: 'Personal Trainer', experience: '6 years',
        certifications: 'NASM CPT, ACE Certified, CrossFit Level 2',
        summary: 'Specializing in functional training and Olympic weightlifting. Former collegiate athlete with experience coaching clients aged 18-65. Passionate about injury prevention and corrective exercise.',
        submitted: '2026-10-08', status: 'pending',
      },
      {
        id: 2, name: 'Dr. James Park', initials: 'JP', email: 'j.park@example.com',
        type: 'Sports Nutritionist', experience: '10 years',
        certifications: 'PhD Sports Nutrition, ISSN CISSN, RD',
        summary: 'Published researcher in sports nutrition with 15+ peer-reviewed papers. Specializing in performance nutrition for endurance athletes and body composition optimization.',
        submitted: '2026-10-07', status: 'pending',
      },
      {
        id: 3, name: 'Maria Gonzalez', initials: 'MG', email: 'maria.g@example.com',
        type: 'Yoga Instructor', experience: '8 years',
        certifications: 'RYT-500, Yoga Alliance E-RYT, Prenatal Yoga Certified',
        summary: 'Experienced yoga instructor focusing on vinyasa and restorative styles. Runs a successful studio with 200+ regular clients. Interested in expanding reach through digital coaching.',
        submitted: '2026-10-05', status: 'pending',
      },
      {
        id: 4, name: 'Ryan O\'Brien', initials: 'RO', email: 'ryan.ob@example.com',
        type: 'Physiotherapist', experience: '12 years',
        certifications: 'DPT, OCS, CSCS',
        summary: 'Doctor of Physical Therapy specializing in sports rehabilitation. Works with professional athletes in recovery programs. Wants to offer preventive exercise programs on the platform.',
        submitted: '2026-10-02', status: 'pending',
      },
    ];

    function renderApplications(list) {
      applicationsContainer.innerHTML = list.map(app => `
        <div class="application-card fade-in-up" data-app-id="${app.id}">
          <div class="application-header">
            <div class="avatar-placeholder lg">${app.initials}</div>
            <div class="applicant-info">
              <div class="applicant-name">${app.name}</div>
              <div class="applicant-email">${app.email}</div>
            </div>
            <span class="badge-li badge-dot ${app.status === 'pending' ? 'badge-warning' : app.status === 'approved' ? 'badge-success' : 'badge-danger'}">
              ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
            </span>
          </div>

          <div class="application-meta">
            <div class="meta-item">
              <div class="meta-label">Specialty</div>
              <div class="meta-value">${app.type}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Experience</div>
              <div class="meta-value">${app.experience}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Certifications</div>
              <div class="meta-value">${app.certifications}</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Submitted</div>
              <div class="meta-value">${new Date(app.submitted).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            </div>
          </div>

          <div class="qualification-summary">${app.summary}</div>

          ${app.status === 'pending' ? `
          <div class="application-actions">
            <button class="btn-li-primary approve-app-btn" data-app-id="${app.id}">
              <i class="bi bi-check-lg"></i> Approve
            </button>
            <button class="btn-li-danger reject-app-btn" data-app-id="${app.id}">
              <i class="bi bi-x-lg"></i> Reject
            </button>
            <button class="btn-li-outline" onclick="showToast('Email preview coming soon.','info');">
              <i class="bi bi-envelope"></i> Contact
            </button>
          </div>
          ` : `
          <div class="d-flex align-items-center gap-2">
            <i class="bi ${app.status === 'approved' ? 'bi-check-circle text-success' : 'bi-x-circle text-danger'}"></i>
            <span class="text-muted" style="font-size:var(--fs-sm);">${app.status === 'approved' ? 'Approved' : 'Rejected'} by admin</span>
          </div>
          `}
        </div>
      `).join('');

      const countEl = document.getElementById('pending-app-count');
      if (countEl) countEl.textContent = list.filter(a => a.status === 'pending').length;
    }

    renderApplications(applications);

    // Approve
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.approve-app-btn');
      if (!btn) return;
      const app = applications.find(a => a.id === parseInt(btn.dataset.appId));
      if (!app) return;
      const confirmed = await confirmAction({
        title: 'Approve Application',
        message: `Grant professional access to ${app.name} (${app.type})?`,
        confirmText: 'Approve',
        type: 'success'
      });
      if (confirmed) {
        app.status = 'approved';
        renderApplications(applications);
        showToast(`${app.name} has been approved as ${app.type}.`, 'success');
      }
    });

    // Reject
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.reject-app-btn');
      if (!btn) return;
      const app = applications.find(a => a.id === parseInt(btn.dataset.appId));
      if (!app) return;
      const confirmed = await confirmAction({
        title: 'Reject Application',
        message: `Reject ${app.name}'s application? They will be notified.`,
        confirmText: 'Reject',
        type: 'danger'
      });
      if (confirmed) {
        app.status = 'rejected';
        renderApplications(applications);
        showToast(`${app.name}'s application has been rejected.`, 'danger');
      }
    });

    // Status filter
    const appStatusFilter = document.getElementById('app-status-filter');
    if (appStatusFilter) {
      appStatusFilter.addEventListener('change', () => {
        const val = appStatusFilter.value;
        renderApplications(val ? applications.filter(a => a.status === val) : applications);
      });
    }
  }

  /* ─────────────────────────────────────────────────────────
     REPORTS MANAGEMENT PAGE
     ───────────────────────────────────────────────────────── */
  const reportsContainer = document.getElementById('reports-list');
  if (reportsContainer) {
    const reports = [
      {
        id: 1, type: 'Post', targetName: 'Derek Williams', targetInitials: 'DW',
        reason: 'Spam / Misleading Content',
        description: 'User is repeatedly posting links to an external supplement store with false health claims.',
        contentPreview: '"Buy the ONLY supplement you need! 100% guaranteed 30 lbs muscle in 2 weeks! Visit…"',
        reportedBy: 'Alex Morgan', date: '2026-10-10', status: 'open', priority: 'high',
      },
      {
        id: 2, type: 'Comment', targetName: 'Unknown User', targetInitials: 'UU',
        reason: 'Harassment / Bullying',
        description: 'Comment contains personal attacks and body-shaming language directed at another member.',
        contentPreview: '"You look terrible, why even bother posting progress pics when you look like…"',
        reportedBy: 'Olivia Brooks', date: '2026-10-09', status: 'open', priority: 'high',
      },
      {
        id: 3, type: 'Post', targetName: 'Tom Jackson', targetInitials: 'TJ',
        reason: 'Dangerous Health Advice',
        description: 'Post recommends an extreme crash diet (500 cal/day) without medical supervision.',
        contentPreview: '"The fastest way to lose weight: eat only 500 calories a day for 30 days straight…"',
        reportedBy: 'Samira Patel', date: '2026-10-08', status: 'under-review', priority: 'medium',
      },
      {
        id: 4, type: 'User', targetName: 'FitBot2026', targetInitials: 'FB',
        reason: 'Suspected Bot / Fake Account',
        description: 'Account created 2 days ago, already posted 50+ identical messages promoting a product.',
        contentPreview: 'N/A — multiple identical promotional posts detected.',
        reportedBy: 'Marcus Chen', date: '2026-10-07', status: 'resolved', priority: 'low',
      },
      {
        id: 5, type: 'Post', targetName: 'Jordan Lee', targetInitials: 'JL',
        reason: 'Intellectual Property / Copyright',
        description: 'Post contains a full workout plan copied verbatim from a published book without credit.',
        contentPreview: '"Here\'s my totally original 12-week hypertrophy plan…" (matches content from published source)',
        reportedBy: 'Nina Rossi', date: '2026-10-06', status: 'open', priority: 'medium',
      },
    ];

    function priorityClass(p) {
      const map = { high: 'badge-danger', medium: 'badge-warning', low: 'badge-muted' };
      return map[p] || 'badge-muted';
    }
    function reportStatusClass(s) {
      const map = { open: 'badge-danger', 'under-review': 'badge-warning', resolved: 'badge-success' };
      return map[s] || 'badge-muted';
    }
    function reportStatusLabel(s) {
      const map = { open: 'Open', 'under-review': 'Under Review', resolved: 'Resolved' };
      return map[s] || s;
    }

    function renderReports(list) {
      reportsContainer.innerHTML = list.map(r => `
        <div class="report-item fade-in-up" data-report-id="${r.id}">
          <div class="report-header">
            <div class="report-target">
              <div class="avatar-placeholder sm">${r.targetInitials}</div>
              <div>
                <div style="font-weight:var(--fw-medium);color:var(--color-heading);font-size:var(--fs-sm);">${r.targetName}</div>
                <div class="report-target-type">${r.type}</div>
              </div>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <span class="badge-li ${priorityClass(r.priority)}">${r.priority}</span>
              <span class="badge-li badge-dot ${reportStatusClass(r.status)}">${reportStatusLabel(r.status)}</span>
            </div>
          </div>

          <div class="report-reason">
            <div class="reason-label"><i class="bi bi-flag-fill me-1"></i>${r.reason}</div>
            <div class="reason-text">${r.description}</div>
          </div>

          <div class="report-content-preview">
            <small class="text-muted d-block mb-1"><i class="bi bi-quote me-1"></i>Reported Content Preview</small>
            ${r.contentPreview}
          </div>

          <div class="report-meta">
            <span><i class="bi bi-person me-1"></i>Reported by: ${r.reportedBy}</span>
            <span><i class="bi bi-calendar me-1"></i>${new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <div class="report-actions">
            ${r.status !== 'resolved' ? `
              <button class="btn-li-outline mark-review-btn" data-report-id="${r.id}">
                <i class="bi bi-eye"></i> ${r.status === 'open' ? 'Mark as Reviewing' : 'Continue Review'}
              </button>
              <button class="btn-li-primary resolve-report-btn" data-report-id="${r.id}">
                <i class="bi bi-check-lg"></i> Resolve
              </button>
              <button class="btn-li-danger" onclick="showToast('Content removal simulated.','danger');">
                <i class="bi bi-trash"></i> Remove Content
              </button>
            ` : `
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle text-success"></i>
                <span class="text-muted" style="font-size:var(--fs-sm);">Resolved</span>
              </div>
            `}
          </div>
        </div>
      `).join('');

      const countEl = document.getElementById('open-report-count');
      if (countEl) countEl.textContent = list.filter(r => r.status === 'open').length;
    }

    renderReports(reports);

    // Mark as reviewing
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.mark-review-btn');
      if (!btn) return;
      const r = reports.find(r => r.id === parseInt(btn.dataset.reportId));
      if (!r) return;
      r.status = 'under-review';
      renderReports(reports);
      showToast('Report marked as under review.', 'info');
    });

    // Resolve
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.resolve-report-btn');
      if (!btn) return;
      const r = reports.find(r => r.id === parseInt(btn.dataset.reportId));
      if (!r) return;
      const confirmed = await confirmAction({
        title: 'Resolve Report',
        message: 'Mark this report as resolved? This action cannot be undone.',
        confirmText: 'Resolve',
        type: 'success'
      });
      if (confirmed) {
        r.status = 'resolved';
        renderReports(reports);
        showToast('Report resolved.', 'success');
      }
    });

    // Status filter
    const reportStatusFilter = document.getElementById('report-status-filter');
    if (reportStatusFilter) {
      reportStatusFilter.addEventListener('change', () => {
        const val = reportStatusFilter.value;
        renderReports(val ? reports.filter(r => r.status === val) : reports);
      });
    }
  }

  /* ─────────────────────────────────────────────────────────
     DASHBOARD — Sparkline bars animation
     ───────────────────────────────────────────────────────── */
  document.querySelectorAll('.spark-bars').forEach(container => {
    const bars = container.querySelectorAll('.spark-bar');
    bars.forEach((bar, i) => {
      const heights = [35, 50, 70, 45, 80, 60, 90, 55, 75, 85, 40, 65];
      bar.style.height = (heights[i % heights.length]) + '%';
    });
  });
});
