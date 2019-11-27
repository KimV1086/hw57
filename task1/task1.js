const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const getTimeFrontend = tasks.reduce((sum, currentTask) => {
    if (currentTask.category === 'Frontend') {
        sum += currentTask.timeSpent
    }
    return sum
}, 0);

console.log('Time spent for Frontend category: ' + getTimeFrontend);

const getTimeBug = tasks.reduce((sum, currentTask) => {
    if (currentTask.type === 'bug') {
        sum += currentTask.timeSpent
    }
    return sum
}, 0);

console.log('Time spent for Bug type: ' + getTimeBug);

const quantityTitle = tasks.filter((item) => item.title.includes('UI')).length;

console.log('Title quantity with UI: ' + quantityTitle);

const quantityTitleCategory = tasks.reduce((accum, currentTask) => {
    if (currentTask.category === 'Frontend') {
        accum.Frontend++;
    }
    if (currentTask.category === 'Backend') {
        accum.Backend++;
    }
    return accum
}, {Frontend: 0, Backend: 0});
console.log(quantityTitleCategory);


const timeSpentForTitle = tasks.map(item => {
    if(item.timeSpent >= 4) {
        return {title: item.title, category: item.category}
    }
}).filter(elem => {
    if(elem !== undefined) return elem
});

console.log(timeSpentForTitle);
