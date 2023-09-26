import React, {Component}  from "react"

class App extends Component{

    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            tareas: [],
            _id: ''
                
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    //este evento guarda cossas con el poder de cristo rey
    addTask(e){
        if(this.state._id ){
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'La tarea fue actualizada'});
                this.setState({title: '', description: '', _id: ''})
                this.obtenertarea();
            });
        }else{
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    M.toast({html: 'tarea guardada'});
                    this.setState({title: '', description: ''});
                    this.obtenertarea();
                })
                .catch(err => console/log(err));
        }

        e.preventDefault();
    }

    //esta wea es para que "llamer" o haga ejecutar a la cosa que esta abajo 
    componentDidMount(){
        this.obtenertarea();
    }

    obtenertarea(){
        fetch('/api/tasks') //esta wea hace por defecto el metodo gect asi que no es necesario hacer una configuracion de obtener cosas porque ya lo hace al servidor
            .then(res => res.json())
            .then(data => {
                this.setState({tareas: data});
            });
    }

    editarTarea(_id){
        fetch(`/api/tasks/${_id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                _id: data._id
            })
        });
    }

    eliminarTarea(_id){
        if (confirm ('seguro de querer eliminar?')){
            fetch(`/api/tasks/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'Tarea Eliminada'});
                this.obtenertarea();
            });
        }
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }


    render(){
        return(
            <div>
                {/*Navegacion*/}
                <nav className = "light-blue darken-4"> 
                    <div className="container">
                        <a className="brand-logo" href="/">Mern stack</a>
                    </div>
                </nav>

                {/*Componente principal*/}

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Titulo de tarea" value={this.state.title}></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Descripcion de tarea" className="materialize-textarea" value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4"> Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>La descripcione</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tareas.map(tareas => {
                                            return (
                                                <tr key={tareas._id} >
                                                    <td> {tareas.title}</td>
                                                    <td> {tareas.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={ () => this.eliminarTarea(tareas._id)}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        <button onClick={() => this.editarTarea(tareas._id)} className="btn light-blue darken-4" style={{margin: '6px'}}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;