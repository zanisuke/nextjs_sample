import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Index() {
    return (
        <div>
            {CreateItemList()}
            <img src="images/lain_gray.jpg" />
        </div>
    )
}

function CreateItemList() {
    const items = ['apple', 'orange', 'cherry']
    let itemList = items.map((item, key) => {
        console.log(key)
        return (
            <ListItem key={key} button>
                <ListItemText primary={item} />
            </ListItem>
        )
    })
    return (
        <List>
            {itemList}
        </List>
    )
}
