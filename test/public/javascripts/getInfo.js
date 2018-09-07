function numberToRef( seatNumber ) {

    let ref = 0;
    switch ( seatNumber ){
        case 1: ref='seat1/'; break;
        case 2: ref='seat2/'; break;
        case 3: ref='seat3/'; break;
        case 4: ref='seat4/'; break;
        case 5: ref='seat5/'; break;
        case 6: ref='seat6/'; break;
        case 7: ref='seat7/'; break;
        case 8: ref='seat8/'; break;
        case 9: ref='seat9/'; break;
        case 10: ref='seat10/'; break;
    }
    return ref;
}

HiLight.prototype.getUid = async function ( seatNumber ) {

    return (await this.getInfo(numberToRef(seatNumber))).val().uid;
};

HiLight.prototype.getInfo = async function( name ) {

    try{
        let ref = this.database.ref(name);
        return await ref.once('value');
    } catch (e) {
        console.log(e.message);
        return e.message;
    }
};