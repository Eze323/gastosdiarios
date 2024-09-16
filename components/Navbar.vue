<!-- <script setup>
import { signOut } from 'firebase/auth';

const auth = useFirebaseAuth();
const user = useCurrentUser();

function handleSignOut() {
  signOut(auth);
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Gastos Diarios</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Movimientos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Categorías</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cuentas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Agenda</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Reportes
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Por Fecha</a></li>
              <li><a class="dropdown-item" href="#">Por Categoría</a></li>
              <li><a class="dropdown-item" href="#">Tendencia</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Finanzas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Presupuestos</a></li>
              <li><a class="dropdown-item" href="#">Deudas</a></li>
              <li><a class="dropdown-item" href="#">Metas</a></li>
              <li><a class="dropdown-item" href="#">Registros Frecuentes</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Icon name="lucide:user"/>
              Opciones
            </a>
          </li>
          <li class="nav-item">
            <div class="card card-body text-center mt-3">
              {{ user.displayName }}
              <i class="bi bi-person-circle"></i>
              <button @click="handleSignOut" class="btn btn-link">
                Sign Out
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-nav .nav-item {
  margin-right: 1rem;
}

.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
}

.navbar-nav .dropdown-menu {
  padding: 0;
}

.navbar-nav .dropdown-item {
  padding: 0.5rem 1rem;
}

.navbar-nav .nav-divider {
  margin: 0.5rem 0;
}

.navbar-nav .card {
  padding: 0.5rem 1rem;
}
</style> -->
<script setup>
import { signOut } from 'firebase/auth';

const auth = useFirebaseAuth();
const user = useCurrentUser();

function handleSignOut() {
  signOut(auth);
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Gastos Diarios</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Movimientos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Categorías</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Cuentas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Agenda</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Reportes
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Por Fecha</a></li>
              <li><a class="dropdown-item" href="#">Por Categoría</a></li>
              <li><a class="dropdown-item" href="#">Tendencia</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Finanzas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Presupuestos</a></li>
              <li><a class="dropdown-item" href="#">Deudas</a></li>
              <li><a class="dropdown-item" href="#">Metas</a></li>
              <li><a class="dropdown-item" href="#">Registros Frecuentes</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <Icon name="lucide:user" class="text-white"/>
              Opciones
            </a>
          </li>
          <li class="nav-item">
            <div class="card card-body text-center mt-3 bg-transparent border-0">
              <span class="text-white">{{ user.displayName }}</span>
              <i class="bi bi-person-circle text-white"></i>
              <button @click="handleSignOut" class="btn btn-link text-white">
                Sign Out
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar-nav .nav-item {
  margin-right: 1rem;
}

.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.navbar-nav .nav-link:hover {
  color: #fdbb2d !important;
}

.navbar-nav .dropdown-menu {
  background-color: #1a2a6c;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar-nav .dropdown-item {
  padding: 0.5rem 1rem;
  color: white;
}

.navbar-nav .dropdown-item:hover {
  background-color: #b21f1f;
}

.navbar-nav .card {
  padding: 0.5rem 1rem;
}

.navbar-nav .card .btn-link {
  text-decoration: none;
}

.navbar-nav .card .btn-link:hover {
  color: #fdbb2d !important;
}
</style>
