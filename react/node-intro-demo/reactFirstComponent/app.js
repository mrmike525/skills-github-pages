const Shiba = () => {
    return <img src="https://66.media.tumblr.com/8844e689de079e6134709eba05acccd1/tumblr_ohtx6cUWOi1voqnhpo5_250.png" />
}

const SharPei = () => {
    return <img src="https://i.pinimg.com/originals/60/16/ea/6016eaad1a6779310b73cdd002cc974e.jpg" />

}
const App = () => {
    return (
        <div>
            <Shiba />
            <SharPei />
            <Shiba />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))