import "../styles/loading-animation.css"

export default function LoadingAnimation() {
  return <div className="canva">
    <div className="container">

      <div className="cauldronBody">
      </div>
      <div className="cauldronLid">
        <div className="innerLid"></div>
        <div className="outerLid"> </div>

      </div>
      <div className="ladle"></div>
      <div className="bubbles">
        <div className="bubbleContainer">
          <div className="bubbleBound" id="bubbleBound1">
            <div className="bubble" id="bubble1">
              <div className="opaqueBackground"></div>
            </div>
          </div>
          <div className="bubbleBound" id="bubbleBound2">
            <div className="bubble" id="bubble2">
              <div className="opaqueBackground"></div>
            </div>
          </div>
          <div className="bubbleBound" id="bubbleBound3">
            <div className="bubble" id="bubble3">
              <div className="opaqueBackground"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cauldronLegs">
        <div className="leg" id="leg1"></div>
        <div className="leg" id="leg2"></div>
      </div>
    </div>
  </div>
}