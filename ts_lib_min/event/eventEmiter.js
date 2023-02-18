import UidGenerator from '../uidGenerator/uidGenerator';
class EventEmiter extends UidGenerator {
    constraints;
    eventsManager = {};
    constructor(constraints) {
        super();
        this.constraints = constraints;
    }
    #avalaible(event) { if (this.constraints?.events) {
        if (this.constraints?.events.indexOf(event) == -1) {
            throw new Error(`event : <<${event}>>  is not supported`);
        }
        else {
            return true;
        }
    } return true; }
    when(events, listener, changeRequired) { let uid = this.validatedUid(listener.uid) ? listener.uid : listener.uid = (changeRequired ? '#' : '') + this.generateUid(); events.trim().split(' ').forEach(event => { if (event == '')
        return; this.#avalaible(event); let eventData = this.eventsManager[event]; eventData = eventData ? eventData : this.eventsManager[event] = { wrapperCollection: {}, lastValue: undefined }; const wrapper = { listener, count: 0, lastCall: new Date() }; eventData.wrapperCollection[uid] = wrapper; }); return this; }
    ;
    emit(events, value) { events.trim().split(' ').forEach(event => { if (event == '')
        return; this.#avalaible(event); let eventData = this.eventsManager[event]; if (eventData == undefined)
        return; if (value == undefined) {
        value = eventData.lastValue;
    } const changed = eventData.lastValue !== value; const wrapperCollection = eventData.wrapperCollection; for (const uid in wrapperCollection) {
        if ((uid.charAt(0) == '#') && !changed)
            continue;
        new Promise(resolve => { resolve(wrapperCollection[uid].listener(value, { event, count: wrapperCollection[uid].count, value, lastValue: eventData.lastValue, uid })); wrapperCollection[uid].lastCall = new Date(); wrapperCollection[uid].count = wrapperCollection[uid].count + 1; });
    } eventData.lastValue = value; }); }
    remove(e) { const uid = e.uid ? e.uid : e.listener?.uid; const events = e.event ? e.event : (e.events ? e.events : ''); if (events == '') {
        throw new Error(`Impossible d\'identifier un event dans '' `);
    } events.split(' ').forEach((event) => { const eventData = this.eventsManager[event]; if (eventData == undefined)
        return; const wrapperCollection = eventData.wrapperCollection; const wrapper = wrapperCollection[uid]; if (wrapper == undefined)
        return; delete wrapperCollection[uid]; }); }
}
export default EventEmiter;
//# sourceMappingURL=eventEmiter.js.map