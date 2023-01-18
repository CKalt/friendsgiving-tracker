import "./App.css";

// from Amplify Studio
import { FoodCreateForm } from "./ui-components";

// from tutorial : https://www.youtube.com/watch?v=DvxhI8rehtQ
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Food } from "./models";

function App() {
    // from (same) tutorial : https://www.youtube.com/watch?v=DvxhI8rehtQ
    const [food, setFood] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await DataStore.observeQuery(Food).subscribe(({ items }) => {
                setFood(items)
            });
        }
        getData();
    });

    return (
        <div className='container'>
            <FoodCreateForm />
            <ul>
                {food.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title} - {item.person}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
