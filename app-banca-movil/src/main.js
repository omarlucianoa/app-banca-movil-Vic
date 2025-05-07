import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <h1>Mi Banco</h1>
    </header>
    <main>
      <section class="account-summary">
        <h2>Mi Saldo</h2>
        <span class="balance-label">Saldo Actual</span>
        <p class="balance-amount">$ 10,000.00</p>
      </section>
      <section class="actions">
        <h2>Acciones Rápidas</h2>
        <ul>
          <li><button>Transferir</button></li>
          <li><button>Pagar Servicios</button></li>
          <li><button>Ver Movimientos</button></li>
          <li><button>Recargar Móvil</button></li>
        </ul>
      </section>
    </main>
    <footer class="footer">
        <p>&copy; 2023 Mi Banco. Todos los derechos reservados.</p>
    </footer>
  </div>
`;