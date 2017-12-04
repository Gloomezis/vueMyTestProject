import Vue from 'vue'

//<span>{{ price | toUSD }}</span>
Vue.filter('toUSD', function (value) {
    return `$${value}`;
});

//<span>{{ text | readMore(10, '...') }}</span>
Vue.filter('readMore', function (text, length, suffix) {
    return text.substring(0, length) + suffix;
});

//<span>{{ price | toFixed(2) | toUSD }}</span>
Vue.filter('toFixed', function (price, limit) {
    return price.toFixed(limit);
});

//<span>{{ user | json }}</span>
Vue.filter('json', function (value) {
    return JSON.stringify(value);
});

//Extracting a list of property values from an array of objects:
//USAGES:  <span>{{ users | pluck('last_name') }}</span>
Vue.filter('pluck', function (objects, key) {
    return objects.map(function(object) { 
        return object[key];
    });
});

//Return the element at the given index:
//USAGES: <span>{{ videos | at(1) }}</span>
Vue.filter('at', function (value, index) {
    return value[index];
});

//Return the minimum value in a given list:
//USAGES: <span>{{ ages | min }}</span>
Vue.filter('min', function (values) {
    return Math.min(...values);
});

//Shuffle a list of elements:
//USAGES: <span>{{ cards | shuffle }}</span>
Vue.filter('shuffle', function (values) {
    for (var i = values.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = values[i];
        values[i] = values[j];
        values[j] = temp;
    }
    return values;
});

//Return the first element of an array:
//USAGES: <span>{{ consoles | first }}</span>
Vue.filter('first', function (values) {
    if(Array.isArray(values)) {
        return values[0];
    }
    return values;
});

//Return the last element of an array:
//USAGES: <span>{{ consoles | last }}</span>
Vue.filter('last', function (values) {
    if(Array.isArray(values)) {
        return values[values.length - 1];
    }
    return values;
});

//Return a copy of the array without the given elements:
//USAGES: <span>{{ unpaidInvoices | without('#1003') }}</span>
Vue.filter('without', function (values, exclude) {
    return values.filter(function(element) {
        return !exclude.includes(element);
    });
});

//Remove duplicated elements in an array:
//USAGES: <span>{{ recentViewedPosts | unique }}</span>
Vue.filter('unique', function (values, unique) {
    return values.filter(function(element, index, self) {
        return index == self.indexOf(element);
    });
});

//Prepend text to a string:
//USAGES: <span>{{ greeting | prepend(' World!') }}</span>
Vue.filter('prepend', function (string, prepend) {
    return `${string}${prepend}`;
});

//Repeat a string n times:
//USAGES: <span>{{ greeting | repeat(3) }}</span>
Vue.filter('repeat', function (string, times) {
    return string.repeat(times);
});

