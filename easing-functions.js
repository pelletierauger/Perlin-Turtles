        y = height / 2 - 100 + cosineFadePowMorer(i, 350, 150);
        ellipse(x, y, 2);
        }
        }

        function draw() {

        }

        function cosineFade(sum, dur, scale) {
            var range = map(sum, 0, dur, 0, 1);
            // var constrainedRange = constrain(normalizedRange, 0, 1);
            // var fadeSmooth = constrainedRange * PI;
            // var coFade = map(pow(cos(range),0.1), 1, 0.9402940372573783, 0, scale);
            var coFade = map(cos(range), 1, 0.5403023058681398, 0, scale);
            return coFade;
        }

        function cosineFadePow(sum, dur, scale) {
            var range = map(sum, 0, dur, 0, 1);
            // var constrainedRange = constrain(normalizedRange, 0, 1);
            // var fadeSmooth = constrainedRange * PI;
            var coFade = map(pow(cos(range), 0.1), 1, 0.9402940372573783, 0, scale);
            // var coFade = map(cos(range), 1, 0.5403023058681398, 0, scale);  
            return coFade;
        }


        function cosineFadePowMore(sum, dur, scale) {
            var range = map(sum, 0, dur, 0, 1);
            // var constrainedRange = constrain(normalizedRange, 0, 1);
            // var fadeSmooth = constrainedRange * PI;
            var coFade = map(pow(cos(range), 0.01), 1, 0.9938626462668108, 0, scale);
            // var coFade = map(cos(range), 1, 0.5403023058681398, 0, scale);  
            return coFade;
        }

        function cosineFadePowMorer(sum, dur, scale) {
            var range = map(sum, 0, dur, 0, 1);
            // var constrainedRange = constrain(normalizedRange, 0, 1);
            // var fadeSmooth = constrainedRange * PI;
            var coFade = map(pow(cos(range), 0.000001), 1, 0.9999993843737192, 0, 1);
            // var coFade0 = map(pow(cos(range),0.000001), 1, 0.9999993843737192, 0, 1);
            coFade = map(cos(coFade), 1, 0.5403023058681398, 0, scale);
            // coFade = lerp(coFade0, coFade2, 0.5);
            // var coFade = map(cos(range), 1, 0.5403023058681398, 0, scale);  
            return coFade;
        }

        // 0.9993845629887088