var brandon = {
    nombre: 'Brandon',
    apellido: 'Diaz',
    edad: 24
}
var prof = {
    posid: 0
}
var entity1 = {
    name: 'A',
    profile: {
        id: 20
    }
}
var entity4 = {
    name: 'D',
    profile: {
        id: 20
    }
}
var entity2 = {
    name: 'B',
    profile: {
        id: 50
    }
}
var entity3 = {
    name: 'C',
    profile: {
        id: 18
    }
}
var arr = [entity1, entity4, entity2, entity3];


console.log(arr.sort((a, b) => {
    if (a.profile.id < b.profile.id)
        return -1;
    if (a.profile.id > b.profile.id)
        return 1;
    return 0;
}));