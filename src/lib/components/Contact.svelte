<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  let isSubmitting = false;
  let submitStatus = null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      submitStatus = 'success';
      formData = { name: '', email: '', message: '' };
      isSubmitting = false;

      setTimeout(() => {
        submitStatus = null;
      }, 3000);
    }, 1000);
  };
</script>

<section id="contact" class="contact-section">
  <h2>Get In Touch</h2>
  <p class="section-subtitle">Have a project in mind? Let's talk about it!</p>

  <div class="contact-container">
    <div class="contact-info">
      <div class="info-item">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div class="info-text">
          <h4>Location</h4>
          <p>San Francisco, CA</p>
        </div>
      </div>

      <div class="info-item">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <div class="info-text">
          <h4>Phone</h4>
          <p>(555) 123-4567</p>
        </div>
      </div>

      <div class="info-item">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </div>
        <div class="info-text">
          <h4>Email</h4>
          <p>hello@example.com</p>
        </div>
      </div>
    </div>

    <form on:submit={handleSubmit} class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          placeholder="Your name"
          required
          disabled={isSubmitting}
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          placeholder="your.email@example.com"
          required
          disabled={isSubmitting}
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          bind:value={formData.message}
          placeholder="Tell me about your project..."
          rows="5"
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button type="submit" class="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {#if submitStatus === 'success'}
        <div class="success-message">
          ✓ Message sent successfully! I'll be in touch soon.
        </div>
      {/if}
    </form>
  </div>
</section>

<style>
  .contact-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1));
  }

  :global(.contact-section) h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    text-align: center;
    color: #9ca3af;
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }

  .contact-container {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .info-item {
    display: flex;
    gap: 1.5rem;
  }

  .info-icon {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
  }

  .info-icon svg {
    width: 24px;
    height: 24px;
  }

  .info-text h4 {
    color: white;
    margin-bottom: 0.25rem;
  }

  .info-text p {
    color: #9ca3af;
    margin: 0;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    color: #e5e7eb;
    font-weight: 500;
  }

  .form-group input,
  .form-group textarea {
    background: rgba(31, 41, 55, 0.5);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: white;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(31, 41, 55, 0.8);
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #6b7280;
  }

  .submit-btn {
    padding: 1rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    padding: 1rem;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #86efac;
    border-radius: 8px;
    text-align: center;
    animation: slideInUp 0.3s ease;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
    }

    .contact-section {
      padding: 3rem 1rem;
    }
  }
</style>
