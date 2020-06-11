import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { createTodosAction } from '../../actions';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'react-bootstrap';

interface CreateTasksProps {
    createTask(Description: string, date: string,picture:string): void;
}

interface CreateTasksState {
    Description: string;
    date: string;
    picture: string;
}

class _CreateTasks extends React.Component<CreateTasksProps, CreateTasksState> {
    state: CreateTasksState = {
        Description: '',
        date: '',
        picture:'',
    }
    render() {
        const { Description, date, picture } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <h4>Add a task:</h4>
                    <textarea value={Description} onChange={this.handleInputChange} required name="Description"
                        placeholder="Write here your task..."></textarea>
                    <br />
                    <input value={date} onChange={this.handleInputChange} name="date" type="date" />
                    <br />
                    <input value={picture} onChange={this.handleInputChange} name="picture"  />
                    <Button type="submit" >SAVE</Button>
                    <br/>
                </form>
            </div>
        )
    }

    handleInputChange = (e: any) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        } as any);
    }

    onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { Description, date,picture } = this.state;
        console.log({picture})

        const { createTask } = this.props;
        console.log(Description, date)
        createTask(Description, date, picture);
    }
}
const mapDispatchToProps = {
    createTask: createTodosAction,
}

export const CreateTasks = connect(null, mapDispatchToProps)(_CreateTasks);