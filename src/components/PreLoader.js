import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={265}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
    <rect x="0" y="107" rx="3" ry="3" width="150" height="15" /> 
    <rect x="0" y="126" rx="4" ry="4" width="93" height="15" /> 
    <rect x="0" y="164" rx="8" ry="8" width="80" height="24" /> 
    <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)

export default Loader