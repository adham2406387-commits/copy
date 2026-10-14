<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard — Locked-In Fitness</title>
  <meta name="description" content="Locked-In admin dashboard. Monitor platform statistics, user activity, and pending actions.">

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">

  <!-- Locked-In Design System -->
  <link rel="stylesheet" href="../../css/variables.css">
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/layout.css">
  <link rel="stylesheet" href="../../css/components.css">
  <link rel="stylesheet" href="../../css/pages/admin.css">
</head>
<body>

  <!-- ═══════════ NAVBAR ═══════════ -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-locked-in">
    <div class="container-fluid px-3 px-lg-4">
      <a class="navbar-brand" href="../../index.html">
        <i class="bi bi-lightning-charge-fill brand-icon"></i>
        Locked-In <span style="font-size:var(--fs-xs);color:var(--color-muted);font-weight:400;margin-left:6px;">Admin</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="adminNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-1">
          <li class="nav-item">
            <a class="nav-link" href="../../index.html"><i class="bi bi-house nav-icon"></i>Site</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../community/index.html"><i class="bi bi-people nav-icon"></i>Community</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle nav-icon"></i>Admin
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="../user/profile.html"><i class="bi bi-person me-2"></i>My Profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="../auth/login.html"><i class="bi bi-box-arrow-right me-2"></i>Sign Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- ═══════════ ADMIN SUB-NAV ═══════════ -->
  <div style="padding-top:var(--navbar-height);">
    <div class="admin-subnav">
      <div class="container-fluid px-3 px-lg-4 d-flex gap-0">
        <a href="dashboard.html" class="subnav-link active">
          <i class="bi bi-speedometer2"></i> Dashboard
        </a>
        <a href="users.html" class="subnav-link">
          <i class="bi bi-people"></i> Users
        </a>
        <a href="applications.html" class="subnav-link">
          <i class="bi bi-person-badge"></i> Applications
          <span class="subnav-badge">4</span>
        </a>
        <a href="reports.html" class="subnav-link">
          <i class="bi bi-flag"></i> Reports
          <span class="subnav-badge">3</span>
        </a>
      </div>
    </div>
  </div>

  <!-- ═══════════ MAIN CONTENT ═══════════ -->
  <main class="container-fluid px-3 px-lg-4 py-4">

    <!-- Page Header -->
    <div class="page-header fade-in-up">
      <h1>Dashboard</h1>
      <p class="page-subtitle">Platform overview and quick actions</p>
    </div>

    <!-- ── Stat Cards ──────────────────────────────────────── -->
    <div class="stats-grid fade-in-up fade-in-up-delay-1">
      <div class="stat-card">
        <div class="stat-icon bg-primary-soft text-primary">
          <i class="bi bi-people-fill"></i>
        </div>
        <div>
          <div class="stat-value">2,847</div>
          <div class="stat-label">Total Users</div>
          <div class="stat-change up"><i class="bi bi-arrow-up-short"></i>12% this month</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-accent-soft text-accent">
          <i class="bi bi-person-badge-fill"></i>
        </div>
        <div>
          <div class="stat-value">4</div>
          <div class="stat-label">Pending Applications</div>
          <div class="stat-change" style="color:var(--color-warning);"><i class="bi bi-clock"></i> Needs attention</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-info-soft text-info">
          <i class="bi bi-chat-square-text-fill"></i>
        </div>
        <div>
          <div class="stat-value">1,256</div>
          <div class="stat-label">Community Posts</div>
          <div class="stat-change up"><i class="bi bi-arrow-up-short"></i>8% this week</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-danger-soft text-danger">
          <i class="bi bi-flag-fill"></i>
        </div>
        <div>
          <div class="stat-value">3</div>
          <div class="stat-label">Open Reports</div>
          <div class="stat-change down"><i class="bi bi-arrow-down-short"></i>2 since last week</div>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <!-- ── User Growth Chart ─────────────────────────────── -->
      <div class="col-lg-8">
        <div class="chart-card fade-in-up fade-in-up-delay-2">
          <div class="chart-header">
            <div class="chart-title">User Growth</div>
            <div class="d-flex gap-2">
              <button class="btn-li-ghost btn-sm active" style="color:var(--color-primary);">7D</button>
              <button class="btn-li-ghost btn-sm">30D</button>
              <button class="btn-li-ghost btn-sm">90D</button>
            </div>
          </div>
          <div class="spark-bars">
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
            <div class="spark-bar"></div>
          </div>
          <div class="d-flex justify-content-between mt-3" style="font-size:var(--fs-xs);color:var(--color-muted);">
            <span>Oct 1</span>
            <span>Oct 3</span>
            <span>Oct 5</span>
            <span>Oct 7</span>
            <span>Oct 9</span>
            <span>Oct 11</span>
          </div>
        </div>
      </div>

      <!-- ── Quick Stats ───────────────────────────────────── -->
      <div class="col-lg-4">
        <div class="card-li-flat fade-in-up fade-in-up-delay-3" style="height:100%;">
          <h5 style="font-size:var(--fs-md);font-weight:var(--fw-semi);margin-bottom:var(--space-lg);">Quick Stats</h5>
          <div class="d-flex justify-content-between align-items-center py-2" style="border-bottom:1px solid var(--color-border);">
            <span style="font-size:var(--fs-sm);color:var(--color-text-secondary);">Active Professionals</span>
            <span style="font-weight:var(--fw-semi);color:var(--color-heading);">42</span>
          </div>
          <div class="d-flex justify-content-between align-items-center py-2" style="border-bottom:1px solid var(--color-border);">
            <span style="font-size:var(--fs-sm);color:var(--color-text-secondary);">Workouts Logged Today</span>
            <span style="font-weight:var(--fw-semi);color:var(--color-heading);">318</span>
          </div>
          <div class="d-flex justify-content-between align-items-center py-2" style="border-bottom:1px solid var(--color-border);">
            <span style="font-size:var(--fs-sm);color:var(--color-text-secondary);">Avg. Session Duration</span>
            <span style="font-weight:var(--fw-semi);color:var(--color-heading);">12m 34s</span>
          </div>
          <div class="d-flex justify-content-between align-items-center py-2" style="border-bottom:1px solid var(--color-border);">
            <span style="font-size:var(--fs-sm);color:var(--color-text-secondary);">Community Engagement</span>
            <span style="font-weight:var(--fw-semi);color:var(--color-primary);">78%</span>
          </div>
          <div class="d-flex justify-content-between align-items-center py-2">
            <span style="font-size:var(--fs-sm);color:var(--color-text-secondary);">Monthly Active Users</span>
            <span style="font-weight:var(--fw-semi);color:var(--color-heading);">1,892</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Recent Activity ─────────────────────────────────── -->
    <div class="row g-4 mt-1">
      <div class="col-lg-6">
        <div class="card-li-flat fade-in-up fade-in-up-delay-3">
          <h5 style="font-size:var(--fs-md);font-weight:var(--fw-semi);margin-bottom:var(--space-lg);">Recent Activity</h5>
          <ul class="activity-list">
            <li class="activity-item">
              <div class="activity-icon bg-success-soft text-success"><i class="bi bi-person-plus"></i></div>
              <div class="activity-text"><strong>Emily Watson</strong> registered a new account</div>
              <span class="activity-time">5m ago</span>
            </li>
            <li class="activity-item">
              <div class="activity-icon bg-accent-soft text-accent"><i class="bi bi-person-badge"></i></div>
              <div class="activity-text"><strong>Sarah Kim</strong> submitted a professional application</div>
              <span class="activity-time">28m ago</span>
            </li>
            <li class="activity-item">
              <div class="activity-icon bg-danger-soft text-danger"><i class="bi bi-flag"></i></div>
              <div class="activity-text"><strong>Alex Morgan</strong> reported a post for spam</div>
              <span class="activity-time">1h ago</span>
            </li>
            <li class="activity-item">
              <div class="activity-icon bg-primary-soft text-primary"><i class="bi bi-chat-square-text"></i></div>
              <div class="activity-text"><strong>Olivia Brooks</strong> published a progress update</div>
              <span class="activity-time">2h ago</span>
            </li>
            <li class="activity-item">
              <div class="activity-icon bg-info-soft text-info"><i class="bi bi-patch-check"></i></div>
              <div class="activity-text">Admin approved <strong>Marcus Chen</strong> as professional</div>
              <span class="activity-time">4h ago</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── Pending Actions ───────────────────────────────── -->
      <div class="col-lg-6">
        <div class="card-li-flat fade-in-up fade-in-up-delay-4">
          <h5 style="font-size:var(--fs-md);font-weight:var(--fw-semi);margin-bottom:var(--space-lg);">Pending Actions</h5>
          <div class="d-flex align-items-center justify-content-between p-3 mb-2" style="background:var(--color-accent-soft);border-radius:var(--radius-md);">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-person-badge text-accent"></i>
              <span style="font-size:var(--fs-sm);color:var(--color-text);">4 professional applications awaiting review</span>
            </div>
            <a href="applications.html" class="btn-li-accent btn-sm">Review</a>
          </div>
          <div class="d-flex align-items-center justify-content-between p-3 mb-2" style="background:var(--color-danger-soft);border-radius:var(--radius-md);">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-flag text-danger"></i>
              <span style="font-size:var(--fs-sm);color:var(--color-text);">3 community reports need attention</span>
            </div>
            <a href="reports.html" class="btn-li-danger btn-sm">View</a>
          </div>
          <div class="d-flex align-items-center justify-content-between p-3" style="background:var(--color-warning-soft);border-radius:var(--radius-md);">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-pause-circle text-warning"></i>
              <span style="font-size:var(--fs-sm);color:var(--color-text);">1 suspended user pending review</span>
            </div>
            <a href="users.html" class="btn-li-outline btn-sm" style="border-color:var(--color-warning);color:var(--color-warning);">Check</a>
          </div>
        </div>
      </div>
    </div>

  </main>

  <!-- ═══════════ FOOTER ═══════════ -->
  <footer class="footer-locked-in" style="margin-top:var(--space-xl);">
    <div class="container">
      <div class="footer-bottom" style="border-top:none;margin-top:0;padding-top:0;">
        <p>&copy; 2026 Locked-In Fitness — Admin Panel</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../../js/main.js"></script>
  <script src="../../js/pages/admin.js"></script>
</body>
</html>
