import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"/>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"/>
      <div className="container my-5">

    <div className="main-box border border-primary p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fw-bold">Task List</h1>

            <button className="btn btn-primary px-4 py-2">
                <i className="bi bi-plus-lg"></i>
                Add Task
            </button>
        </div>

        <div className="card border-0 shadow-sm rounded-4 p-4 mb-3">
            <div className="row align-items-center">

                <div className="col-md-4">
                    <small className="text-secondary">Task</small>
                    <h5>Go to gym</h5>
                </div>

                <div className="col-md-2">
                    <small className="text-secondary">Priority</small>
                    <div className="text-danger fw-bold">High</div>
                </div>

                <div className="col-md-2">
                    <span className="badge bg-light text-secondary">
                        To Do
                    </span>
                </div>

                <div className="col-md-1">
                    <i className="bi bi-circle fs-4 text-secondary"></i>
                </div>

                <div className="col-md-1">
                    <i className="bi bi-pencil-square fs-4"></i>
                </div>

                <div className="col-md-1 text-danger">
                    <i className="bi bi-trash fs-4"></i>
                </div>
            </div>
        </div>

        <div className="card border-0 shadow-sm rounded-4 p-4 mb-3">
            <div className="row align-items-center">

                <div className="col-md-4">
                    <small className="text-secondary">Task</small>
                    <h5>Read a book</h5>
                </div>

                <div className="col-md-2">
                    <small className="text-secondary">Priority</small>
                    <div className="text-success fw-bold">Low</div>
                </div>

                <div className="col-md-2">
                    <span className="badge bg-light text-secondary">
                        Done
                    </span>
                </div>

                <div className="col-md-1">
                    <i className="bi bi-circle-fill fs-4 text-primary"></i>
                </div>

                <div className="col-md-1">
                    <i className="bi bi-pencil-square fs-4"></i>
                </div>

                <div className="col-md-1 text-danger">
                    <i className="bi bi-trash fs-4"></i>
                </div>
            </div>
        </div>

        <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="row align-items-center">

                <div className="col-md-4">
                    <small className="text-secondary">Task</small>
                    <h5>Go to market</h5>
                </div>

                <div className="col-md-2">
                    <small className="text-secondary">Priority</small>
                    <div className="text-warning fw-bold">Medium</div>
                </div>

                <div className="col-md-2">
                    <span className="badge bg-light text-secondary">
                        In Progress
                    </span>
                </div>

                <div className="col-md-1">
                    <i className="bi bi-circle-half fs-4 text-primary"></i>
                </div>

                <div className="col-md-1">
                    <i className="bi bi-pencil-square fs-4"></i>
                </div>

                <div className="col-md-1 text-danger">
                    <i className="bi bi-trash fs-4"></i>
                </div>
            </div>
        </div>
    </div>

    <div className="border border-primary p-4 mt-4">

        <div className="d-flex justify-content-between mb-4">
            <h3>Add Task</h3>
            <i className="bi bi-x-lg fs-4"></i>
        </div>

        <div className="mb-4">
            <label className="form-label fw-bold">
                Task
            </label>

            <input
                type="text"
                className="form-control"
                placeholder="Type your task here..."/>
        </div>

        <div className="mb-5">

            <label className="form-label fw-bold d-block">
                Priority
            </label>

            <div className="btn-group" role="group">

                <input type="radio"
                       className="btn-check"
                       name="priority"
                       id="high"/>

                <label className="btn btn-outline-danger"
                       for="high">
                    High
                </label>

                <input type="radio"
                       className="btn-check"
                       name="priority"
                       id="medium"/>

                <label className="btn btn-outline-warning"
                       for="medium">
                    Medium
                </label>

                <input type="radio"
                       className="btn-check"
                       name="priority"
                       id="low"/>

                <label className="btn btn-outline-success"
                       for="low">
                    Low
                </label>
            </div>
        </div>

        <div className="text-end">
            <button className="btn btn-secondary px-4">
                Add
            </button>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

    </>
  )
}

export default App
