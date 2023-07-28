export default function checkOrder(data) {
    return data.sort((a,b) => b.health - a.health);

}

