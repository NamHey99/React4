import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="container mt-50">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"> Form </h3>
            </div>
            <div className="panel-body">
              <form action="" method="POST" role="form">
                <legend> Form title </legend>
              
                <div className="form-group">
                  <label for=""> Username : </label>
                  <input type="text" className="form-control" name="txtName"/>
                </div>

                <div className="form-group">
                  <label for=""> Password : </label>
                  <input type="password" className="form-control" name="txtName"/>
                </div>

                <button type="submit" className="btn btn-primary"> Submit </button>&nbsp;&nbsp;&nbsp;
                <button type="reset" className="btn btn-default"> Delete All </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
