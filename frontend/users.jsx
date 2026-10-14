<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Management — Locked-In Admin</title>
  <meta name="description" content="Manage platform users: search, filter, view profiles, and update account statuses.">

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
        <a href="dashboard.html" class="subnav-link">
          <i class="bi bi-speedometer2"></i> Dashboard
        </a>
        <a href="users.html" class="subnav-link active">
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
      <h1>User Management</h1>
      <p class="page-subtitle">Search, view, and manage platform user accounts</p>
    </div>

    <!-- ── Users Table Card ────────────────────────────────── -->
    <div class="admin-table-card fade-in-up fade-in-up-delay-1">
      <div class="admin-table-header">
        <h5><i class="bi bi-people me-2 text-primary"></i>All Users</h5>
        <div class="d-flex gap-2 flex-wrap">
          <div class="search-input-wrap">
            <i class="bi bi-search search-icon"></i>
            <input type="text" class="form-control-li" id="user-search" placeholder="Search users…" style="min-width:220px;">
          </div>
          <select class="form-select-li" id="role-filter" style="min-width:140px;">
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Professional">Professional</option>
            <option value="Member">Member</option>
          </select>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table-li">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th style="width:100px;">Actions</th>
            </tr>
          </thead>
          <tbody id="users-table-body">
            <!-- Populated by admin.js -->
          </tbody>
        </table>
      </div>

      <div class="admin-table-footer">
        <span class="table-info" id="users-table-info">Loading…</span>
        <nav>
          <ul class="pagination pagination-li mb-0">
            <li class="page-item disabled"><a class="page-link" href="#">&laquo;</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
          </ul>
        </nav>
      </div>
    </div>

  </main>

  <!-- ═══════════ VIEW USER MODAL ═══════════ -->
  <div class="modal fade modal-li" id="viewUserModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><i class="bi bi-person me-2"></i>User Profile</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-center">
          <div class="avatar-placeholder lg mx-auto mb-3" id="viewUserInitials" style="width:72px;height:72px;font-size:1.5rem;">—</div>
          <h5 id="viewUserName" style="color:var(--color-heading);margin-bottom:4px;">—</h5>
          <p style="font-size:var(--fs-sm);color:var(--color-muted);margin-bottom:var(--space-lg);" id="viewUserEmail">—</p>
          <div class="d-flex justify-content-center gap-3 mb-3">
            <div>
              <div style="font-size:var(--fs-xs);color:var(--color-muted);margin-bottom:2px;">Role</div>
              <span class="badge-li" id="viewUserRole">—</span>
            </div>
            <div>
              <div style="font-size:var(--fs-xs);color:var(--color-muted);margin-bottom:2px;">Status</div>
              <span class="badge-li" id="viewUserStatus">—</span>
            </div>
            <div>
              <div style="font-size:var(--fs-xs);color:var(--color-muted);margin-bottom:2px;">Joined</div>
              <span style="font-size:var(--fs-sm);color:var(--color-text);" id="viewUserJoined">—</span>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn-li-outline" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

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
