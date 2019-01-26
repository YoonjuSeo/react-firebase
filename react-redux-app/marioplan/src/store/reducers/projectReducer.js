const initState = {
    projects:[
        {id: '1', title: 'help me find peach', content: 'You can find her in level 10'},
        {id: '2', title: 'collect all the stars', content: 'You can get a bonus points!'},
        {id: '3', title: 'egg hunt with yoshi', content: 'You can ride him on the back. Have fun!'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer