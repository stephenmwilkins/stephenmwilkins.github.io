document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer .container');
  if (footer) {
    footer.innerHTML = '© <span id="year"></span> Stephen Wilkins';
    footer.querySelector('#year').textContent = new Date().getFullYear();
  }

  const heroLabel = document.querySelector('#about .label');
  if (heroLabel) heroLabel.remove();
  const heroRole = document.querySelector('#about .intro');
  if (heroRole) {
    heroRole.textContent = 'Professor of Astronomy and the Public Understanding of Science';
    if (!document.querySelector('#about .university-link')) {
      const universityLink = document.createElement('a');
      universityLink.className = 'university-link';
      universityLink.href = 'https://www.sussex.ac.uk/';
      universityLink.target = '_blank';
      universityLink.rel = 'noreferrer';
      universityLink.textContent = 'University of Sussex ↗';
      heroRole.insertAdjacentElement('afterend', universityLink);
    }
  }

  const contactLabel = document.querySelector('#contact .label');
  if (contactLabel) contactLabel.remove();
  const contactLinks = document.querySelector('#contact .links');
  if (contactLinks && !contactLinks.querySelector('[data-site-link]')) {
    [
      ['University of Sussex', 'https://www.sussex.ac.uk/', 'U'],
      ['Physics & Astronomy @ Sussex', 'https://www.sussex.ac.uk/physics/pgstudy/prepstudy', 'P'],
      ['Astronomy Centre @ Sussex', 'https://www.sussex.ac.uk/research/centres/astronomy/', 'A'],
      ['Syzygy Labs', 'http://syzygy-labs.uk', 'S'],
      ['Curiosity Sussex', 'https://curiositysussex.org.uk/', 'C'],
      ['ORCiD', 'https://orcid.org/0000-0003-3903-6935', 'O']
    ].forEach(([label, href, icon]) => {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.dataset.siteLink = 'true';
      link.innerHTML = `<b class="icon link-icon" aria-hidden="true"></b><!-- Replace this circle with an image by changing the b element to: <img class="contact-image" src="assets/your-icon.png" alt=""> --> ${label}`;
      contactLinks.append(link);
    });
  }
  if (contactLinks && !document.querySelector('#contact .contact-split')) {
    contactLinks.querySelector('a[href^="mailto:"]')?.remove();
    const adsLink = contactLinks.querySelector('a[href*="adsabs"]');
    if (adsLink) adsLink.innerHTML = '<b class="icon link-icon" aria-hidden="true"></b> Publications on ADS';
    const linkedInLink = contactLinks.querySelector('a[href*="linkedin.com/in/prof-stephen-wilkins"]');
    if (linkedInLink) linkedInLink.innerHTML = '<b class="icon link-icon" aria-hidden="true"></b> LinkedIn';
    const elementsLink = [...contactLinks.querySelectorAll('a')].find(link => link.textContent.includes('Elements profile'));
    if (elementsLink) elementsLink.href = 'https://profiles.sussex.ac.uk/p192372-stephen-wilkins';
    contactLinks.querySelectorAll('a').forEach(link => {
      const icon = link.querySelector('.icon');
      if (icon) {
        icon.textContent = '';
        icon.classList.add('link-icon');
      }
      link.querySelector('span')?.remove();
    });
    const contactContainer = contactLinks.closest('.container');
    const split = document.createElement('div');
    split.className = 'contact-split';
    const details = document.createElement('div');
    details.className = 'contact-details';
    details.innerHTML = `<a class="contact-email" href="mailto:s.wilkins@sussex.ac.uk?subject=Website%20enquiry"><span>Email</span>s.wilkins@sussex.ac.uk</a><address><span>Address</span><strong>Department of Physics &amp; Astronomy</strong><br>Pevensey 2, University of Sussex<br>Falmer, Brighton BN1 9QH<br>United Kingdom</address>`;
    const linksPanel = document.createElement('div');
    linksPanel.className = 'contact-links-panel';
    const linkGroups = document.createElement('div');
    linkGroups.className = 'contact-link-groups';
    const organisationGroup = document.createElement('div');
    organisationGroup.className = 'link-group';
    organisationGroup.innerHTML = '<p class="label">ORGANISATIONS</p><div class="links"></div>';
    const onlineGroup = document.createElement('div');
    onlineGroup.className = 'link-group';
    onlineGroup.innerHTML = '<p class="label">ONLINE</p><div class="links"></div>';
    const organisationLinks = organisationGroup.querySelector('.links');
    const onlineLinks = onlineGroup.querySelector('.links');
    const organisationNames = new Set(['University of Sussex', 'Physics & Astronomy @ Sussex', 'Astronomy Centre @ Sussex', 'Syzygy Labs', 'Curiosity Sussex']);
    [...contactLinks.querySelectorAll('a')].forEach(link => (organisationNames.has(link.textContent.trim()) ? organisationLinks : onlineLinks).append(link));
    linkGroups.append(organisationGroup, onlineGroup);
    linksPanel.append(linkGroups);
    split.append(details, organisationGroup, onlineGroup);
    contactContainer.append(split);
  }

  const teachingIntroduction = document.querySelector('#teaching .col-lg-5 p:not(.label)');
  if (teachingIntroduction) teachingIntroduction.textContent = 'I am a faculty member in the Department of Physics & Astronomy at Sussex. My role includes conducting research and contributing to the department’s teaching and administration.';

  const leadershipIntroduction = document.querySelector('#teaching .col-lg-6 > p');
  if (leadershipIntroduction) leadershipIntroduction.textContent = 'I currently serve as Head of Physics & Astronomy, leading a department of around 60 academic, research, and technical staff. Alongside this role, I continue to teach and contribute to the department’s public engagement activities.';

  document.querySelectorAll('#teaching li').forEach(item => {
    if (item.textContent.includes('Stellar & Planetary Physics')) item.textContent = 'Stellar & Planetary Physics (FHEQ L6)';
    if (item.textContent.includes('Established the Sussex Data Science') || item.textContent.includes('ACES summer school')) item.remove();
  });

  const exhibitsIntroduction = document.querySelector('#engagement .engagement-groups article:nth-child(2) p:not(.label)');
  if (exhibitsIntroduction) exhibitsIntroduction.innerHTML = 'I build exhibits and XR experiences for events such as the Royal Society Summer Science Exhibition. Through <a href="http://syzygy-labs.uk" target="_blank" rel="noreferrer">Syzygy Labs</a>, I also provide scientific consultancy for creative, cultural and commercial partners.';
  const exhibitsTitle = document.querySelector('#engagement .engagement-groups article:nth-child(2) h3');
  if (exhibitsTitle) exhibitsTitle.textContent = 'Immersive science & creative practice';

  const communityIntroduction = document.querySelector('#engagement .engagement-groups article:nth-child(3) p:not(.label)');
  if (communityIntroduction) communityIntroduction.innerHTML = 'Founder and chair of <a href="https://curiositysussex.org.uk/" target="_blank" rel="noreferrer">Curiosity Sussex</a>, delivering free science activities across Sussex. I am also Astronomer in Residence at the <a href="https://www.the-observatory.org" target="_blank" rel="noreferrer">Observatory Science Centre</a> and trustee of <a href="https://science-projects.org/" target="_blank" rel="noreferrer">Science Projects</a>.';
  const communityTitle = document.querySelector('#engagement .engagement-groups article:nth-child(3) h3');
  if (communityTitle) communityTitle.textContent = 'Community science & discovery';
  const talksImage = document.querySelector('#engagement .engagement-groups article:first-child .activity-image');
  if (talksImage) {
    talksImage.src = 'assets/lectures.jpg';
    talksImage.alt = 'Stephen Wilkins giving a lecture';
  }

  const columns = [...document.querySelectorAll('#research .research-strands > div')];
  document.querySelectorAll('#research .research-strand > span').forEach(number => number.remove());
  const observations = columns[0];
  const synthetic = columns[1];
  const simulations = columns[2];

  if (!observations || !simulations) return;
  const observationsImage = observations.querySelector('.research-image');
  if (observationsImage) {
    observationsImage.src = 'https://cdn.esawebb.org/archives/images/screen/questionmark1.jpg';
    observationsImage.alt = 'Lensed Question Mark Galaxy observed by JWST';
  }
  synthetic?.remove();

  const simulationTitle = simulations.querySelector('h3');
  const simulationCopy = simulations.querySelector('p');
  if (simulationTitle) simulationTitle.textContent = 'Simulations & synthetic observations';
  if (simulationCopy) simulationCopy.innerHTML = 'I combine galaxy simulations with <a href="https://synthesizer-project.github.io/" target="_blank" rel="noreferrer">Synthesizer</a> to turn theory into realistic observations.';

  const detail = {
    observations: {
      title: 'Observations',
      image: 'https://cdn.esawebb.org/archives/images/screen/questionmark1.jpg',
      alt: 'Lensed Question Mark Galaxy observed by JWST',
      body: `<p>My observational work uses leading facilities on the ground and in space to trace galaxy evolution across cosmic history.</p><p>I work with data from the James Webb Space Telescope, Hubble Space Telescope, ALMA and the Very Large Telescope, alongside major collaborations including CEERS, COSMOS-Web, PRIMER and NGDEEP.</p><p>These observations provide a direct view of the first billion years after the Big Bang, revealing how early galaxies formed, grew and changed their environments.</p>`
    },
    simulations: {
      title: 'Simulations & synthetic observations',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1400&q=90',
      alt: 'Colourful nebula in space',
      body: `<p>I co-lead the <a href="https://flaresimulations.github.io/" target="_blank" rel="noreferrer">FLARES</a> project, a suite of cosmological simulations designed to explore the first galaxies and the environments in which they formed.</p><p>With <a href="https://synthesizer-project.github.io/" target="_blank" rel="noreferrer">Synthesizer</a>, we transform simulation output into realistic images and spectra. This creates a direct bridge between theoretical models and data from telescopes such as JWST, Euclid and ALMA.</p><p>By comparing virtual and real observations, we can test our understanding of the physical processes that shape galaxies.</p>`
    }
  };

  const modal = document.createElement('div');
  modal.className = 'modal fade research-modal';
  modal.id = 'researchDetail';
  modal.tabIndex = -1;
  modal.setAttribute('aria-labelledby', 'researchDetailTitle');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `<div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><button type="button" class="modal-close" data-bs-dismiss="modal" aria-label="Close">×</button><div class="modal-body p-0"><img class="modal-research-image" src="" alt=""><div class="modal-copy"><p class="label">RESEARCH DETAIL</p><h2 id="researchDetailTitle"></h2><div class="modal-detail"></div></div></div></div></div>`;
  document.body.append(modal);

  const modalInstance = new bootstrap.Modal(modal);
  const modalTitle = modal.querySelector('#researchDetailTitle');
  const modalImage = modal.querySelector('.modal-research-image');
  const modalDetail = modal.querySelector('.modal-detail');

  const makeInteractive = (element, item) => {
    element.classList.add('research-strand--interactive');
    element.setAttribute('role', 'button');
    element.setAttribute('tabindex', '0');
    element.setAttribute('aria-label', `Read more about ${item.title}`);
    const open = () => {
      modalTitle.textContent = item.title;
      modalImage.src = item.image;
      modalImage.alt = item.alt;
      modalDetail.innerHTML = item.body;
      modalInstance.show();
    };
    element.addEventListener('click', open);
    element.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
  };

  makeInteractive(observations.querySelector('.research-strand'), detail.observations);
  makeInteractive(simulations.querySelector('.research-strand'), detail.simulations);
});
