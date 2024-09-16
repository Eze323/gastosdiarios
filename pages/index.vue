<!-- 

<template>
    <div class="container">

    
    <div class="row">
        <div class="col">
                <div class="card card-body text-center mt-3">
                    <h1>Esta es la pagina principal</h1>
                </div>

        </div>

    </div>
</div>
</template> -->
<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h1>Inicio</h1>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4">
          <button class="btn btn-primary btn-block">Ingreso</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-danger btn-block">Gasto</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-warning btn-block">Transferencia</button>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Balance Mensual + Saldo Anterior</h5>
              <!-- <BalanceChart :chart-data="balanceData" /> -->
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Resumen por Categoría Mensual</h5>
              <CategoryChart :chart-data="categoryData" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Line Chart</h5>
              <BarChart/>
              <!-- <LineChart :data="data" :options="options"/> -->
               
              
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Últimos Diez Registros</h5>
              <ul class="list-group">
                <li v-for="record in latestRecords" :key="record.id" class="list-group-item">
                  {{ record.description }} - {{ record.amount }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import BalanceChart from '~/components/BalanceChart.vue';
  import CategoryChart from '~/components/CategoryChart.vue';
  import LineChart from '~/components/LineChart.vue';
  import BarChart from '~/components/BarChart.vue';
  
  
   
  export default defineComponent({
    components: {
      BalanceChart,
      CategoryChart,
      LineChart,
      BarChart,
    },
    data() {
      return {
        balanceData: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          datasets: [
            {
              label: 'Balance Mensual',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
            },
            {
              label: 'Saldo Anterior',
              backgroundColor: '#79f879',
              data: [20, 10, 5, 20, 5, 20, 19, 40, 20, 10, 6, 5],
            },
          ],
          data:{
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets:{
                data: [40, 20, 12, 39],
            }
          }
        },
        options:{
            maintanceAspectRatio:false,
            responsive:true
        },
        categoryData: {
          labels: ['Comida', 'Transporte', 'Entretenimiento', 'Salud', 'Otros'],
          datasets: [
            {
              label: 'Resumen por Categoría',
              backgroundColor: ['#f87979', '#79f879', '#7979f8', '#f8f879', '#79f8f8'],
              data: [40, 20, 12, 39, 10],
            },
          ],
        },
        latestRecords: [
          { id: 1, description: 'Comida', amount: 20 },
          { id: 2, description: 'Transporte', amount: 15 },
          { id: 3, description: 'Entretenimiento', amount: 30 },
          { id: 4, description: 'Salud', amount: 25 },
          { id: 5, description: 'Otros', amount: 10 },
          { id: 6, description: 'Comida', amount: 20 },
          { id: 7, description: 'Transporte', amount: 15 },
          { id: 8, description: 'Entretenimiento', amount: 30 },
          { id: 9, description: 'Salud', amount: 25 },
          { id: 10, description: 'Otros', amount: 10 },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  .btn-block {
    width: 100%;
  }
  
  .card {
    margin-bottom: 1rem;
  }
  
  .list-group-item {
    display: flex;
    justify-content: space-between;
  }
  </style>
  