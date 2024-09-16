<script setup>
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const auth = useFirebaseAuth();

const router = useRouter();

function signInWithGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider()).then(() =>
    router.replace("/")
  );
}
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card text-center mt-5">
          <div class="card-header bg-primary text-white">
            <h3>Bienvenido a Gastos Diarios</h3>
          </div>
          <div class="card-body">
            <p class="lead">Inicia sesión para continuar</p>
            <button @click="signInWithGoogle" class="btn btn-outline-primary btn-lg w-100">
              Inicia sesión con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
