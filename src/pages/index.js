import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Index({ json }) {
    console.log(json)
    let itemList = json.map((item, key) => {
        return (
            <ListItem key={key} button>
                <ListItemText primary={item} />
            </ListItem>
        )
    })
    return (
        <div>
            <List>
                {itemList}
            </List>
            <img src="images/lain_gray.jpg" />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3001/api/getpackagelist`)
    const json = await res.json()
    return { props: { json, }, }
}

async function CreatePackageList({ data }) {
    let itemList = data.map((item, key) => {
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
