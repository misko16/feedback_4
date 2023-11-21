const { default: LoginPage } = require("./LoginPage");
const { default: RegisterPage } = require("./RegisterPage");

const UserMenu = () => {
    return (
        <div>
            <ul>
                <li><RegisterPage/></li>
                <li><LoginPage/></li>
            </ul>        
        </div>
    );
}
export default UserMenu;