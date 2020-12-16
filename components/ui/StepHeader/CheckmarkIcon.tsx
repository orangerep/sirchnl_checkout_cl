import styled from "styled-components"
import tw from "twin.macro"

export const CheckmarkIcon: React.FC = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352.62 352.62">
      <path
        fill="currentColor"
        d="M337.222 22.952c-15.912-8.568-33.66 7.956-44.064 17.748-23.867 23.256-44.063 50.184-66.708 74.664-25.092 26.928-48.348 53.856-74.052 80.173-14.688 14.688-30.6 30.6-40.392 48.96-22.032-21.421-41.004-44.677-65.484-63.648C28.774 167.385-.602 157.593.01 190.029c1.224 42.229 38.556 87.517 66.096 116.28 11.628 12.24 26.928 25.092 44.676 25.704 21.42 1.224 43.452-24.48 56.304-38.556 22.645-24.48 41.005-52.021 61.812-77.112 26.928-33.048 54.468-65.485 80.784-99.145 16.524-20.808 68.544-72.217 27.54-94.248zM26.937 187.581c-.612 0-1.224 0-2.448.611-2.448-.611-4.284-1.224-6.732-2.448 1.836-1.224 4.896-.612 9.18 1.837z"
      />
    </Svg>
  )
}

const Svg = styled.svg`
  ${tw`text-white w-2/5`}
`
