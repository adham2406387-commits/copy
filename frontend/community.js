/* ============================================================
   LOCKED-IN — Community Page Logic (community.js)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ── Demo data ────────────────────────────────────────────── */
  const users = [
    { id: 1, name: 'Alex Morgan',    initials: 'AM', role: 'Fitness Coach',    verified: true  },
    { id: 2, name: 'Jordan Lee',     initials: 'JL', role: 'Member',           verified: false },
    { id: 3, name: 'Samira Patel',   initials: 'SP', role: 'Nutritionist',     verified: true  },
    { id: 4, name: 'Marcus Chen',    initials: 'MC', role: 'Personal Trainer', verified: true  },
    { id: 5, name: 'Olivia Brooks',  initials: 'OB', role: 'Member',           verified: false },
    { id: 6, name: 'Derek Williams', initials: 'DW', role: 'Member',           verified: false },
  ];

  const posts = [
    {
      id: 1, author: users[0], category: 'tips',
      content: `Just finished a 12-week transformation program with one of my clients — 15 lbs of lean muscle gained! 🏋️ The key? <span class="post-tag">#consistency</span> and progressive overload. Here are my top 3 tips for anyone starting their journey:\n\n1. Start with compound movements\n2. Track every workout\n3. Sleep 7-9 hours — recovery is where the magic happens`,
      likes: 128, comments: 23, shares: 15,
      timestamp: new Date(Date.now() - 2 * 3600000).toISOString(),
      liked: false,
    },
    {
      id: 2, author: users[2], category: 'nutrition',
      content: `Meal prep Sunday! 🥗 Here's my go-to high-protein lunch for the week:\n\n• Grilled chicken breast (200g)\n• Brown rice (1 cup)\n• Steamed broccoli & sweet potato\n• Homemade teriyaki sauce\n\nTotal: 580 cal | 45g protein | 62g carbs | 12g fat\n\n<span class="post-tag">#MealPrep</span> <span class="post-tag">#HighProtein</span> <span class="post-tag">#CleanEating</span>`,
      likes: 87, comments: 14, shares: 31,
      timestamp: new Date(Date.now() - 5 * 3600000).toISOString(),
      liked: false,
    },
    {
      id: 3, author: users[4], category: 'progress',
      content: `Month 3 check-in! 📊 Down 22 lbs since I started my journey here. This community has been incredible — the support keeps me going even on tough days. Special shout-out to <span class="post-tag">@AlexMorgan</span> for the workout plans!\n\nRemember: progress isn't always linear. Trust the process! 💪`,
      likes: 245, comments: 52, shares: 8,
      timestamp: new Date(Date.now() - 12 * 3600000).toISOString(),
      liked: true,
    },
    {
      id: 4, author: users[3], category: 'workout',
      content: `Today's killer leg day routine 🔥\n\n• Back Squats: 5×5 @ 225 lbs\n• Romanian Deadlifts: 4×8\n• Walking Lunges: 3×12 each\n• Leg Press: 4×10\n• Calf Raises: 4×15\n\nWho's hitting legs today? Drop a 🦵 in the comments!\n\n<span class="post-tag">#LegDay</span> <span class="post-tag">#NeverSkipLegDay</span>`,
      likes: 94, comments: 37, shares: 12,
      timestamp: new Date(Date.now() - 24 * 3600000).toISOString(),
      liked: false,
    },
    {
      id: 5, author: users[1], category: 'question',
      content: `Question for the community: I've been doing intermittent fasting (16:8) for about 3 weeks now. I feel great, but I'm worried about losing muscle. I train at 6 AM fasted.\n\nShould I take BCAAs before my workout or is that a myth? Any evidence-based advice would be appreciated! 🤔\n\n<span class="post-tag">#IF</span> <span class="post-tag">#IntermittentFasting</span>`,
      likes: 33, comments: 41, shares: 3,
      timestamp: new Date(Date.now() - 48 * 3600000).toISOString(),
      liked: false,
    },
  ];

  const postComments = {
    1: [
      { author: users[1], text: 'This is so motivating! Starting my journey next week 💪', time: '1h ago' },
      { author: users[2], text: 'Point 3 is underrated. Sleep is everything!', time: '45m ago' },
    ],
    3: [
      { author: users[0], text: 'So proud of you! Keep pushing — the best is yet to come! 🔥', time: '8h ago' },
      { author: users[5], text: 'Amazing progress! What was your workout split?', time: '6h ago' },
    ],
  };

  /* ── Render helpers ───────────────────────────────────────── */
  const relTime = (iso) => typeof formatRelativeTime === 'function' ? formatRelativeTime(iso) : 'recently';

  function avatarHTML(user, size = '') {
    const cls = size ? `avatar-placeholder ${size}` : 'avatar-placeholder';
    return `<div class="${cls}" style="background:var(--color-primary-soft);color:var(--color-primary);">${user.initials}</div>`;
  }

  function renderPost(post) {
    const likedClass = post.liked ? 'liked' : '';
    const heartIcon  = post.liked ? 'bi-heart-fill' : 'bi-heart';
    const commentsData = postComments[post.id] || [];
    const commentsHTML = commentsData.map(c => `
      <div class="comment-item">
        ${avatarHTML(c.author, 'sm')}
        <div class="comment-body">
          <div class="comment-author">${c.author.name}</div>
          <p class="comment-text">${c.text}</p>
          <div class="comment-meta">
            <span>${c.time}</span>
            <button type="button">Like</button>
            <button type="button">Reply</button>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <article class="post-card fade-in-up" data-post-id="${post.id}" data-category="${post.category}">
        <div class="post-header">
          ${avatarHTML(post.author)}
          <div class="post-author-info">
            <div class="post-author-name">
              ${post.author.name}
              ${post.author.verified ? '<i class="bi bi-patch-check-fill verified-badge"></i>' : ''}
            </div>
            <div class="post-author-role">${post.author.role} · ${relTime(post.timestamp)}</div>
          </div>
          <div class="dropdown">
            <button class="post-menu-btn" data-bs-toggle="dropdown" aria-label="Post menu">
              <i class="bi bi-three-dots"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#" onclick="return false;"><i class="bi bi-bookmark me-2"></i>Save post</a></li>
              <li><a class="dropdown-item" href="#" onclick="return false;"><i class="bi bi-person-plus me-2"></i>Follow ${post.author.name.split(' ')[0]}</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-danger report-post-btn" href="#" data-post-id="${post.id}"><i class="bi bi-flag me-2"></i>Report post</a></li>
            </ul>
          </div>
        </div>

        <div class="post-body">
          <p>${post.content.replace(/\n/g, '<br>')}</p>
        </div>

        <div class="post-stats">
          <span class="post-stat"><i class="bi bi-heart-fill text-danger me-1"></i>${post.likes} likes</span>
          <span class="post-stat">${post.comments} comments</span>
          <span class="post-stat">${post.shares} shares</span>
        </div>

        <div class="post-actions">
          <button class="post-action-btn like-btn ${likedClass}" data-post-id="${post.id}">
            <i class="bi ${heartIcon}"></i> Like
          </button>
          <button class="post-action-btn comment-toggle-btn" data-post-id="${post.id}">
            <i class="bi bi-chat"></i> Comment
          </button>
          <button class="post-action-btn">
            <i class="bi bi-share"></i> Share
          </button>
        </div>

        <div class="comments-section" id="comments-${post.id}" style="display:none;">
          ${commentsHTML}
          <div class="comment-input-wrap">
            ${avatarHTML(users[1], 'sm')}
            <input type="text" class="form-control-li" placeholder="Write a comment…" data-post-id="${post.id}">
            <button class="btn-li-primary btn-sm send-comment-btn" data-post-id="${post.id}">
              <i class="bi bi-send"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  /* ── Render feed ──────────────────────────────────────────── */
  const feedContainer = document.getElementById('community-feed');
  if (feedContainer) {
    feedContainer.innerHTML = posts.map(renderPost).join('');
  }

  /* ── Filter chips ─────────────────────────────────────────── */
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      document.querySelectorAll('.post-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── Like button ──────────────────────────────────────────── */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.like-btn');
    if (!btn) return;
    const postId = parseInt(btn.dataset.postId);
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    btn.classList.toggle('liked', post.liked);
    const icon = btn.querySelector('i');
    icon.className = post.liked ? 'bi bi-heart-fill' : 'bi bi-heart';
    // Update stats
    const card = btn.closest('.post-card');
    const statEl = card.querySelector('.post-stat');
    if (statEl) statEl.innerHTML = `<i class="bi bi-heart-fill text-danger me-1"></i>${post.likes} likes`;
  });

  /* ── Toggle comments ──────────────────────────────────────── */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.comment-toggle-btn');
    if (!btn) return;
    const section = document.getElementById(`comments-${btn.dataset.postId}`);
    if (section) {
      const visible = section.style.display !== 'none';
      section.style.display = visible ? 'none' : '';
      if (!visible) {
        const input = section.querySelector('input');
        if (input) input.focus();
      }
    }
  });

  /* ── Post a comment ───────────────────────────────────────── */
  function addComment(postId) {
    const section = document.getElementById(`comments-${postId}`);
    if (!section) return;
    const input = section.querySelector(`input[data-post-id="${postId}"]`);
    const text = input?.value.trim();
    if (!text) return;
    const commentHTML = `
      <div class="comment-item fade-in-up">
        ${avatarHTML(users[1], 'sm')}
        <div class="comment-body">
          <div class="comment-author">${users[1].name}</div>
          <p class="comment-text">${text}</p>
          <div class="comment-meta">
            <span>just now</span>
            <button type="button">Like</button>
            <button type="button">Reply</button>
          </div>
        </div>
      </div>
    `;
    const inputWrap = section.querySelector('.comment-input-wrap');
    inputWrap.insertAdjacentHTML('beforebegin', commentHTML);
    input.value = '';
    if (typeof showToast === 'function') showToast('Comment posted!', 'success');
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.send-comment-btn');
    if (btn) addComment(parseInt(btn.dataset.postId));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.matches('.comment-input-wrap input')) {
      addComment(parseInt(e.target.dataset.postId));
    }
  });

  /* ── Create post ──────────────────────────────────────────── */
  const createPostBtn = document.getElementById('create-post-btn');
  const postInput = document.getElementById('post-input');
  if (createPostBtn && postInput) {
    createPostBtn.addEventListener('click', () => {
      const text = postInput.value.trim();
      if (!text) {
        if (typeof showToast === 'function') showToast('Please write something first!', 'warning');
        return;
      }
      const newPost = {
        id: Date.now(),
        author: users[1],
        category: 'all',
        content: text.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
        likes: 0, comments: 0, shares: 0,
        timestamp: new Date().toISOString(),
        liked: false,
      };
      posts.unshift(newPost);
      feedContainer.insertAdjacentHTML('afterbegin', renderPost(newPost));
      postInput.value = '';
      if (typeof showToast === 'function') showToast('Post published! 🎉', 'success');
    });
  }

  /* ── Report post modal ────────────────────────────────────── */
  let reportingPostId = null;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.report-post-btn');
    if (!btn) return;
    e.preventDefault();
    reportingPostId = btn.dataset.postId;
    // Reset selections
    document.querySelectorAll('#reportModal .report-reason-list li').forEach(li => li.classList.remove('selected'));
    const modal = new bootstrap.Modal(document.getElementById('reportModal'));
    modal.show();
  });

  document.querySelectorAll('#reportModal .report-reason-list li').forEach(li => {
    li.addEventListener('click', () => {
      document.querySelectorAll('#reportModal .report-reason-list li').forEach(l => l.classList.remove('selected'));
      li.classList.add('selected');
    });
  });

  const submitReportBtn = document.getElementById('submit-report-btn');
  if (submitReportBtn) {
    submitReportBtn.addEventListener('click', () => {
      const selected = document.querySelector('#reportModal .report-reason-list li.selected');
      if (!selected) {
        if (typeof showToast === 'function') showToast('Please select a reason.', 'warning');
        return;
      }
      bootstrap.Modal.getInstance(document.getElementById('reportModal')).hide();
      if (typeof showToast === 'function') showToast('Report submitted. Thank you for helping keep the community safe.', 'info');
      reportingPostId = null;
    });
  }
});
