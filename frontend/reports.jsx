<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reports — Locked-In Admin</title>
  <meta name="description" content="Manage community reports: review flagged content, users, and comments. Take moderation actions.">

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
        <a href="users.html" class="subnav-link">
          <i class="bi bi-people"></i> Users
        </a>
        <a href="applications.html" class="subnav-link">
          <i class="bi bi-person-badge"></i> Applications
          <span class="subnav-badge">4</span>
        </a>
        <a href="reports.html" class="subnav-link active">
          <i class="bi bi-flag"></i> Reports
          <span class="subnav-badge" id="open-report-count">3</span>
        </a>
      </div>
    </div>
  </div>

  <!-- ═══════════ MAIN CONTENT ═══════════ -->
  <main class="container-fluid px-3 px-lg-4 py-4">

    <!-- Page Header -->
    <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 fade-in-up">
      <div class="page-header mb-0">
        <h1>Reports</h1>
        <p class="page-subtitle">Review and resolve community reports on posts, comments, and users</p>
      </div>
      <div class="d-flex gap-2">
        <select class="form-select-li" id="report-status-filter" style="min-width:160px;">
          <option value="">All Statuses</option>
          <option value="open">Open</option>
          <option value="under-review">Under Review</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
    </div>

    <!-- Summary badges -->
    <div class="d-flex gap-3 mb-4 flex-wrap fade-in-up fade-in-up-delay-1">
      <div class="d-flex align-items-center gap-2 px-3 py-2" style="background:var(--color-danger-soft);border-radius:var(--radius-md);">
        <i class="bi bi-exclamation-circle text-danger"></i>
        <span style="font-size:var(--fs-sm);color:var(--color-text);">3 Open</span>
      </div>
      <div class="d-flex align-items-center gap-2 px-3 py-2" style="background:var(--color-warning-soft);border-radius:var(--radius-md);">
        <i class="bi bi-eye text-warning"></i>
        <span style="font-size:var(--fs-sm);color:var(--color-text);">1 Under Review</span>
      </div>
      <div class="d-flex align-items-center gap-2 px-3 py-2" style="background:var(--color-success-soft);border-radius:var(--radius-md);">
        <i class="bi bi-check-circle text-success"></i>
        <span style="font-size:var(--fs-sm);color:var(--color-text);">1 Resolved</span>
      </div>
    </div>

    <!-- Reports list (populated by admin.js) -->
    <div id="reports-list"></div>

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
