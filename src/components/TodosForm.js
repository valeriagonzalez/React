import React, { Component } from 'react';

class TodosForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsable: '',
            descripcion: '',
            prioridad: 'baja'
        }; 
    }

    handleInput(e) {
        console.log('e.target.value, e.target.name');
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="title"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="responsable"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="responsable"
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className="form-goup">
                        <select
                            name="prioridad"
                            className="form-control"
                            onChange={this.handleInput}
                        />
                    </div>

                </div>
            
            </div>
        )
    }
}

export default TodosForm;