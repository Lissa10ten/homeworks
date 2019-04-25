function calculate() {
    var a = kv.value % (floor.value * number.value)
    if (a === 0) {
        result.value = floor.value
    } else {
        result.value = Math.ceil(a / number.value)
    }
    if (kv.value <= 36) {
        pod.value = 1
    } else {
    pod.value = Math.ceil( kv.value / (floor.value * number.value) )
    }
}