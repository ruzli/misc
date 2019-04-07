
async function gong() {
    const audio = new Audio("https://bustadice.com/5bb187b7ef764e76fb519939f77288c1.mp3")
    if (ex.game_sounds) await audio.play()
    return new Promise(resolve => audio.onended = resolve)
}

async function sound_loop(sound_number, name) {
    let sound_track = [ `cl_hihat`, `claves`, `conga1`, `cowbell`, `hi_conga`, `hightom`, `rimshot`, `snare`, `tom1` ]
    let url = `https://raw.githubusercontent.com/ruzli/misc/master/`
    let format = `.wav`
    let full_string = url + name + format

    if (name != undefined) {
        full_string = url + name + format
    } else if (sound_number != undefined) {
        full_string = url + sound_track[ sound_number ] + format
    } else {
        engine.log(`Sound not found.`)
    }
    const audio = new Audio(full_string)
    if (ex.game_sounds) await audio.play()
    return new Promise(resolve => audio.onended = resolve)
}


async function sound_engine(multiplier) {
    if (multiplier == undefined) {
        engine.log(`Something is wrong with sound engine.`)
        sleep(1200)
        return
    }

    if (multiplier < 5) {
        sound_loop(8)
    } else if (multiplier < 10) {
        sound_loop(1)
    } else if (multiplier < 15) {
        sound_loop(2)
    } else if (multiplier < 20) {
        sound_loop(5)
    } else if (multiplier < 25) {
        sound_loop(4)
    } else if (multiplier < 30) {
        sound_loop(6)
    } else if (multiplier < 35) {
        sound_loop(7)
    } else if (multiplier < 40) {
        sound_loop(0)
    } else {
        sound_loop(3)
    }

}
