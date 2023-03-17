import React from 'react';
import './App.css';

const HOST = "https://siprip-api.onrender.com";
export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      skins: []
    };
  }

  componentDidMount() {
    fetch(`${HOST}/api/skins`, {
      headers: {
        'x-auth-token': import.meta.env.VITE_PLAYER_TOKEN
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            skins: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  computeLevel(price) {
    if (price <= 10) {
      return 1;
    } else if (price <= 50) {
      return 2;
    } else if (price <= 1000) {
      return 3;
    } else {
      return 4;
    }
  }

  renderSkinList(skins) {
    return skins.map(skin => {
      return (
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={skin.image_url} alt="Neil image" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Skin #{skin.id}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Level {this.computeLevel(skin.price)}
              </p>
            </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ${skin.price}
              </button>
          </div>
        </li>
      )
    })
  }

  render() {
    const { error, isLoaded, skins } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div className="max-w-4xl mx-auto">
            <div className="p-4 max-w-3xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Skin catalog</h3>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  {this.renderSkinList(skins)}
                </ul>
              </div>
            </div>
            </div>
        </div>
      );
    }
  }
}

export default App
