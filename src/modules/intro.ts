const HANDLE_INTRO = 'next/HANDLE_INTRO' as const;

export const handleIntro = () => ({
  type: HANDLE_INTRO
})

type IntroAction =
  | ReturnType<typeof handleIntro>

interface IntroState  {
  isIntro: boolean;
}
const initialState: IntroState = {
  isIntro: true
}

const intro = (
  state: IntroState = initialState,
  action: IntroAction
): IntroState  => {
  switch (action.type) {
    case HANDLE_INTRO:
      return { isIntro: false }
    default:
      return state
  }
}

export default intro