import InicioComponent from './componentes/Inicio.vue'
//import UsuariosComponent from './componentes/usuarios.vue'
import InfoUsuarios from './componentes/infoUsuario.vue'

const UsuariosComponent = resolve =>{
    require.ensure (['./componentes/usuarios.vue'], () =>{
        resolve(require ('./componentes/usuarios.vue'));
    })
}
    


export const rutas = [ 
    { path:'', component: InicioComponent },
    { path:'/usuarios', component: UsuariosComponent, name:'usarios' }, 
    { path: '/usuarios/:id'  , component : InfoUsuarios, name: 'infoUsuario' },
    { path: '/users', redirect: '/usuarios' },
    { path: '*', redirect: '/' }
    
]

