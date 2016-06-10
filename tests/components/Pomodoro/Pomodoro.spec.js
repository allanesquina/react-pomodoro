import React from 'react'
import AlertBox from 'components/Pomodoro/AlertBox'
import Pomodoro, { POMODORO_TIME } from 'components/Pomodoro/Pomodoro'
import { shallow, mount } from 'enzyme'

describe('(Component) Pomodoro', () => {
  let wrapper;
  let audioList = {};

  beforeEach(() => {
    const props = {
      setTime: sinon.spy(),
      currentTime: 0
    }
    wrapper = shallow(<Pomodoro {...props} />)

    audioList['stop'] = {play: () => false}
    audioList['play'] = {play: () => false}
    audioList['alarm'] = {play: () => false}

    wrapper.setState({audioList})
  })


  it('Should render as a <div>.', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should start the countdown ', () => {
    wrapper.instance().handleTimeActions();
    expect(wrapper.state().isRunning).to.equal(true)
  })

  it('Should stop the countdown ', () => {
    wrapper.instance().handleTimeActions();
    wrapper.instance().handleTimeActions();
    expect(wrapper.state().isRunning).to.equal(false)
  })

  it('Should reset the countdown ', () => {
    wrapper.instance().handleResetAction();
    expect(wrapper.state().time).to.equal(POMODORO_TIME)
    expect(wrapper.state().isRunning).to.equal(false)
  })

  it('Should open the alertBox component', () => {
    wrapper.instance()._openAlertBox();
    expect(wrapper.state().isAlertBoxActivated).to.equal(true)
  })

  it('Should close the alertBox component', () => {
    wrapper.instance()._openAlertBox();
    wrapper.instance()._closeAlertBox();
    expect(wrapper.state().isAlertBoxActivated).to.equal(false)
  })
})
