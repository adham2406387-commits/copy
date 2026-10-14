<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Community — Locked-In Fitness</title>
  <meta name="description" content="Join the Locked-In fitness community. Share workouts, nutrition tips, progress updates, and connect with fitness professionals.">

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">

  <!-- Locked-In Design System -->
  <link rel="stylesheet" href="../../css/variables.css">
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/layout.css">
  <link rel="stylesheet" href="../../css/components.css">
  <link rel="stylesheet" href="../../css/pages/community.css">
</head>
<body>

  <!-- ═══════════ NAVBAR ═══════════ -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-locked-in">
    <div class="container">
      <a class="navbar-brand" href="../../index.html">
        <i class="bi bi-lightning-charge-fill brand-icon"></i>
        Locked-In
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-1">
          <li class="nav-item">
            <a class="nav-link" href="../../index.html"><i class="bi bi-house nav-icon"></i>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../user/dashboard.html"><i class="bi bi-grid-1x2 nav-icon"></i>Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="index.html"><i class="bi bi-people nav-icon"></i>Community</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../user/workouts.html"><i class="bi bi-activity nav-icon"></i>Workouts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../user/nutrition.html"><i class="bi bi-egg-fried nav-icon"></i>Nutrition</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle nav-icon"></i>Profile
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="../user/profile.html"><i class="bi bi-person me-2"></i>My Profile</a></li>
              <li><a class="dropdown-item" href="../user/progress.html"><i class="bi bi-graph-up me-2"></i>Progress</a></li>
              <li><a class="dropdown-item" href="../user/messages.html"><i class="bi bi-chat-dots me-2"></i>Messages</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="../auth/login.html"><i class="bi bi-box-arrow-right me-2"></i>Sign Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- ═══════════ MAIN CONTENT ═══════════ -->
  <main class="page-wrapper">
    <div class="container">
      <div class="row">

        <!-- ── Feed Column ─────────────────────────────────── -->
        <div class="col-lg-8">

          <!-- Page Header -->
          <div class="page-header fade-in-up">
            <h1><i class="bi bi-people-fill text-primary me-2"></i>Community</h1>
            <p class="page-subtitle">Connect, share, and grow with fellow fitness enthusiasts</p>
          </div>

          <!-- Create Post -->
          <div class="create-post-card fade-in-up fade-in-up-delay-1">
            <div class="d-flex gap-3">
              <div class="avatar-placeholder" style="background:var(--color-primary-soft);color:var(--color-primary);">JL</div>
              <div class="flex-grow-1">
                <textarea class="post-input" id="post-input" placeholder="What's on your mind, Jordan? Share a workout, tip, or progress update…"></textarea>
                <div class="create-post-toolbar">
                  <div class="toolbar-actions">
                    <button class="toolbar-btn" title="Add photo"><i class="bi bi-image"></i></button>
                    <button class="toolbar-btn" title="Add workout"><i class="bi bi-stopwatch"></i></button>
                    <button class="toolbar-btn" title="Add poll"><i class="bi bi-bar-chart"></i></button>
                    <button class="toolbar-btn" title="Tag someone"><i class="bi bi-at"></i></button>
                  </div>
                  <button class="btn-li-primary" id="create-post-btn">
                    <i class="bi bi-send-fill"></i> Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Feed Filters -->
          <div class="feed-filters fade-in-up fade-in-up-delay-2">
            <button class="filter-chip active" data-filter="all">🔥 All Posts</button>
            <button class="filter-chip" data-filter="tips">💡 Tips</button>
            <button class="filter-chip" data-filter="workout">🏋️ Workouts</button>
            <button class="filter-chip" data-filter="nutrition">🥗 Nutrition</button>
            <button class="filter-chip" data-filter="progress">📊 Progress</button>
            <button class="filter-chip" data-filter="question">❓ Questions</button>
          </div>

          <!-- Posts Feed (populated by JS) -->
          <div id="community-feed"></div>

        </div>

        <!-- ── Sidebar ─────────────────────────────────────── -->
        <div class="col-lg-4 community-sidebar">

          <!-- Trending Topics -->
          <div class="widget fade-in-up fade-in-up-delay-2">
            <div class="widget-title"><i class="bi bi-fire text-accent"></i> Trending Topics</div>
            <div class="trending-item">
              <span class="trending-rank">1</span>
              <div>
                <div class="trending-topic">#LegDay</div>
                <div class="trending-posts">342 posts this week</div>
              </div>
            </div>
            <div class="trending-item">
              <span class="trending-rank">2</span>
              <div>
                <div class="trending-topic">#MealPrep</div>
                <div class="trending-posts">278 posts this week</div>
              </div>
            </div>
            <div class="trending-item">
              <span class="trending-rank">3</span>
              <div>
                <div class="trending-topic">#TransformationTuesday</div>
                <div class="trending-posts">195 posts this week</div>
              </div>
            </div>
            <div class="trending-item">
              <span class="trending-rank">4</span>
              <div>
                <div class="trending-topic">#IntermittentFasting</div>
                <div class="trending-posts">156 posts this week</div>
              </div>
            </div>
            <div class="trending-item">
              <span class="trending-rank">5</span>
              <div>
                <div class="trending-topic">#MindsetMatters</div>
                <div class="trending-posts">128 posts this week</div>
              </div>
            </div>
          </div>

          <!-- Suggested People -->
          <div class="widget fade-in-up fade-in-up-delay-3">
            <div class="widget-title"><i class="bi bi-person-plus text-primary"></i> Suggested People</div>
            <div class="suggested-user">
              <div class="avatar-placeholder sm">MC</div>
              <div class="suggested-user-info">
                <div class="suggested-user-name">Marcus Chen <i class="bi bi-patch-check-fill text-primary" style="font-size:0.7rem;"></i></div>
                <div class="suggested-user-role">Personal Trainer</div>
              </div>
              <button class="btn-li-outline btn-sm">Follow</button>
            </div>
            <div class="suggested-user">
              <div class="avatar-placeholder sm">SP</div>
              <div class="suggested-user-info">
                <div class="suggested-user-name">Samira Patel <i class="bi bi-patch-check-fill text-primary" style="font-size:0.7rem;"></i></div>
                <div class="suggested-user-role">Nutritionist</div>
              </div>
              <button class="btn-li-outline btn-sm">Follow</button>
            </div>
            <div class="suggested-user">
              <div class="avatar-placeholder sm">OB</div>
              <div class="suggested-user-info">
                <div class="suggested-user-name">Olivia Brooks</div>
                <div class="suggested-user-role">Member</div>
              </div>
              <button class="btn-li-outline btn-sm">Follow</button>
            </div>
          </div>

          <!-- Community Guidelines -->
          <div class="widget fade-in-up fade-in-up-delay-4">
            <div class="widget-title"><i class="bi bi-shield-check text-success"></i> Community Guidelines</div>
            <ul style="list-style:none;padding:0;margin:0;font-size:var(--fs-sm);color:var(--color-text-secondary);">
              <li style="padding:4px 0;"><i class="bi bi-check2 text-success me-2"></i>Be supportive and encouraging</li>
              <li style="padding:4px 0;"><i class="bi bi-check2 text-success me-2"></i>Share evidence-based advice</li>
              <li style="padding:4px 0;"><i class="bi bi-check2 text-success me-2"></i>Respect everyone's fitness journey</li>
              <li style="padding:4px 0;"><i class="bi bi-check2 text-success me-2"></i>No spam or self-promotion</li>
              <li style="padding:4px 0;"><i class="bi bi-check2 text-success me-2"></i>Report harmful content</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </main>

  <!-- ═══════════ REPORT MODAL ═══════════ -->
  <div class="modal fade modal-li" id="reportModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><i class="bi bi-flag text-danger me-2"></i>Report Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p style="color:var(--color-text-secondary);font-size:var(--fs-sm);margin-bottom:var(--space-md);">
            Why are you reporting this post? Select the most appropriate reason.
          </p>
          <ul class="report-reason-list">
            <li><i class="bi bi-exclamation-triangle me-2"></i>Spam or misleading content</li>
            <li><i class="bi bi-person-x me-2"></i>Harassment or bullying</li>
            <li><i class="bi bi-heart-pulse me-2"></i>Dangerous health advice</li>
            <li><i class="bi bi-shield-x me-2"></i>Intellectual property violation</li>
            <li><i class="bi bi-three-dots me-2"></i>Other</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-li-outline" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn-li-danger" id="submit-report-btn">
            <i class="bi bi-flag-fill"></i> Submit Report
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══════════ FOOTER ═══════════ -->
  <footer class="footer-locked-in">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="footer-brand">
            <i class="bi bi-lightning-charge-fill text-primary"></i> Locked-In
          </div>
          <p class="footer-desc">Your all-in-one fitness platform. Train smarter, eat better, and connect with a community that keeps you accountable.</p>
        </div>
        <div class="col-6 col-lg-2">
          <div class="footer-heading">Platform</div>
          <a href="../user/dashboard.html" class="footer-link">Dashboard</a>
          <a href="../user/workouts.html" class="footer-link">Workouts</a>
          <a href="../user/nutrition.html" class="footer-link">Nutrition</a>
          <a href="index.html" class="footer-link">Community</a>
        </div>
        <div class="col-6 col-lg-2">
          <div class="footer-heading">Company</div>
          <a href="../public/about.html" class="footer-link">About</a>
          <a href="../public/professionals.html" class="footer-link">Professionals</a>
          <a href="#" class="footer-link">Careers</a>
          <a href="#" class="footer-link">Contact</a>
        </div>
        <div class="col-lg-4">
          <div class="footer-heading">Stay Connected</div>
          <p class="footer-desc">Follow us for daily fitness inspiration and platform updates.</p>
          <div class="d-flex gap-2 mt-2">
            <a href="#" class="btn-li-ghost"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="btn-li-ghost"><i class="bi bi-instagram"></i></a>
            <a href="#" class="btn-li-ghost"><i class="bi bi-youtube"></i></a>
            <a href="#" class="btn-li-ghost"><i class="bi bi-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Locked-In Fitness. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../../js/main.js"></script>
  <script src="../../js/pages/community.js"></script>
</body>
</html>
