import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Home = props => {

    const { store, actions } = useContext(Context);

    const {
        handleChange
    } = actions;

    useEffect(() => {
        actions.setValores();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-danger">
                        React {!!store.name && store.name}
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" defaultValue={store.name} onChange={e => handleChange(e)}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;