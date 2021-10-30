import Particles from "react-tsparticles";

export default function Header() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="bg-black h-[600px] relative">
        <Particles
          className="absolute top-0 left-0 right-0 h-[600px] m-auto"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            pauseOnOutsideViewport: true,
            pauseOnBlur: true,
            background: {
              color: {
                value: "#000",
              },
            },
            fpsLimit: 60,
            fullScreen: {
              enable: false,
              zIndex: -2,
            },
            interactivity: {
              modes: {
                // bubble: {
                //   distance: 400,
                //   duration: 10,
                //   opacity: 0.8,
                //   size: 40,
                // },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                  factor: 1000,
                },
                value: 100,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: false,
                value: 2,
              },
            },
            detectRetina: true,
          }}
        />
        <div className="layout text-white z-10 relative">
          <h1>White</h1>
        </div>
      </div>
    </>
  );
}
