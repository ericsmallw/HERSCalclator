/**
 * Created by Eric on 11/1/2015.
 */
rivets.adapters[':'] = {
    observe: function(obj, keypath, callback) {
        watch(obj, keypath, callback)
    },
    unobserve: function(obj, keypath, callback) {
        unwatch(obj, keypath, callback)
    },
    get: function(obj, keypath) {
        return obj[keypath]
    },
    set: function(obj, keypath, value) {
        obj[keypath] = value
    }
};
