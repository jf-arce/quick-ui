import './MenuIcons.css'

export const MenuIcons = () => {
    return (
        <div className='relative'>
            <div className="FABMenu">
                <input type="checkbox" checked />
                <div className="hamburger">
                    <div className="dots">
                        <span className="first"></span>
                        <span className="second"></span>
                        <span className="third"></span>
                    </div>
                </div>
                <div className="action_items_bar">
                    <div className="action_items">
                        <span className="first_item">
                            <i className="material-icons">favorite</i>
                        </span>
                        <span className="second_item">
                            <i className="material-icons">chat</i>
                        </span>
                        <span className="third_item">
                            <i className="material-icons">get_app</i>
                        </span>
                        <span className="fourth_item">
                            <i className="material-icons">share</i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
