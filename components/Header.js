import User from "./User";
export default function Header(){
    return(
        <header className = "flex justify-between p-5 text-sm text-gray-700">
            {/*layered components from global.css : headiv, link*/}
            <div className = "headiv"> 
                <p className = "link">About</p>
                <p className = "link">Store</p>
            </div>
            <div className = "headiv"> 
                <p className = "link">Gmail</p>
                <p className = "link">Images</p>
                <User/>
            </div>
        </header>
    )
}