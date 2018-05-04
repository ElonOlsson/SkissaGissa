export function startTimer() {
  return {
    type: 'START_TIMER',
    payload: 'Started timer'

  }
}

export function stopTimer() {
  return {
    type: 'STOP_TIMER',
    payload: 'Stopped timer'
  }
}

export function resetTimer() {
  return {
    type: 'TIMER_RESETTED',
    payload: time
  }
}
