import { action, computed, makeObservable, observable, runInAction } from 'mobx';

const baseUrl = "http://localhost:8787"
class DataService {
    list = [];
   
    constructor() {
        makeObservable(this, {
            list: observable,
            init: action,
            getService: computed
           
        }),
            this.init();
    }

    async init() {
        try {
            const res = await  axios.get('http://127.0.0.1:5000/api/data');
            const data = await res.json();

            runInAction(() => {
                this.list = data;
                  
                
            });
           
        }
        catch (err) {
            console.error(err)
        }

    }

    get getService() {
        return this.list
    }


}
const singleton = new DataServices();
export default singleton;

// function get()
// {
//   //axios.post('http://127.0.0.1:5000/api/data',)
//   axios.get('http://127.0.0.1:5000/api/data')
//       .then(response => {
//         // setData(response.data);
//         // setClicked(true);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
// }