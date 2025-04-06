// Main Application Controller
class SchoolApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupClock();
    this.loadData();
    this.setupNavigation();
    this.setupServiceWorker();
  }

  setupClock() {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Africa/Dakar'
      };
      document.getElementById('datetime').textContent = 
        now.toLocaleDateString('fr-FR', options);
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  async loadData() {
    try {
      const [students, classes, balance] = await Promise.all([
        this.fetchData('/students'),
        this.fetchData('/classes'),
        this.fetchData('/finance/balance')
      ]);
      
      this.updateDashboard(students, classes, balance);
    } catch (error) {
      console.error('Data loading error:', error);
      this.showError('Erreur de chargement des données');
    }
  }

  async fetchData(endpoint) {
    const response = await fetch(`/api${endpoint}`);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  }

  updateDashboard(students, classes, balance) {
    document.querySelector('#student-widget .value').textContent = students.length;
    document.querySelector('#class-widget .value').textContent = classes.length;
    document.querySelector('#balance-widget .value').textContent = 
      `${balance.amount.toLocaleString('fr-FR')} FCFA`;
  }

  setupNavigation() {
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateTo(link.getAttribute('href'));
      });
    });
  }

  navigateTo(route) {
    // TODO: Implement SPA navigation
    console.log('Navigating to:', route);
  }

  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered:', registration);
          })
          .catch(error => {
            console.log('SW registration failed:', error);
          });
      });
    }
  }

  showError(message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg';
    errorEl.textContent = message;
    document.body.appendChild(errorEl);
    setTimeout(() => errorEl.remove(), 5000);
  }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SchoolApp();
});