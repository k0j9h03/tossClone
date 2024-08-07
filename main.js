document.querySelector('.keypad').addEventListener('click', function(event) {
    const display = document.querySelector('.number');
    const button = event.target;

    if (button.classList.contains('btn')) {
      const value = button.textContent;
      const digit2s = display.querySelectorAll('.digit2');


      if (button.classList.contains('btndelete')) {
        // 삭제 버튼 처리
        if (display.lastElementChild && display.lastElementChild.tagName === 'SPAN') {
          display.removeChild(display.lastElementChild);
        }

        const digitSpans = display.querySelectorAll('.digit');
        const Digit2Span = display.querySelector('.digit2');

        if (digitSpans.length === 3 ) {
            display.removeChild(Digit2Span);
        }

        if (digitSpans.length === 4){
            // display.removeChild(Digit2Span);
            display.insertBefore(Digit2Span, digitSpans[0].nextSibling);
        }

        if (digitSpans.length === 5){
            display.insertBefore(Digit2Span, digitSpans[1].nextSibling);
        }

        if (digitSpans.length === 6){
            digit2s.forEach(digit2 => display.removeChild(digit2));
            display.insertBefore(Digit2Span, digitSpans[2].nextSibling);
        }

        if (digitSpans.length === 7){
            digit2s.forEach(digit2 => display.removeChild(digit2));
            display.insertBefore(Digit2Span, digitSpans[0].nextSibling);
            
            const additionalDigit2Span = document.createElement('span');
            additionalDigit2Span.textContent = ',';
            additionalDigit2Span.classList.add('digit2');
            additionalDigit2Span.classList.add('show');
            display.insertBefore(additionalDigit2Span, digitSpans[3].nextSibling);
        }

        
 
        if (display.childElementCount === 0) {
          const placeholder = document.createElement('h2');
          placeholder.textContent = '얼마나 옮길까요?';
          display.appendChild(placeholder);
        }
      } else {
        // 숫자 버튼 처리
        if (display.querySelector('h2')) {
          display.removeChild(display.querySelector('h2'));
        }

        /** 탐구 필요 */
        digit2s.forEach(s => {
          const next = s.nextSibling;
          if (next) {
            display.insertBefore(s, next.nextSibling);
          }
        });

        const digitSpan = document.createElement('span');
        digitSpan.classList.add('digit');
        digitSpan.textContent = value;
        display.appendChild(digitSpan);


        const digitSpans = display.querySelectorAll('.digit');
        const digit2Span = document.createElement('span');
          if (digitSpans.length > 1 && digitSpans.length % 3 === 1) {
            digit2Span.classList.add('digit2');
            digit2Span.textContent = ',';
            display.insertBefore(digit2Span, digitSpans[0].nextSibling);
            // display.appendChild(digit2Span);
          }

          requestAnimationFrame(() => {
            digitSpan.classList.add('show');
            digit2Span.classList.add('show');
          });
      }
    }
  });