document.querySelector('.keypad').addEventListener('click', function(event) {
    const display = document.querySelector('.number');
    const button = event.target;

    if (button.classList.contains('btn')) {
      const value = button.textContent;

      if (button.classList.contains('btndelete')) {
        // 삭제 버튼 처리
        if (display.lastElementChild && display.lastElementChild.tagName === 'SPAN') {
          display.removeChild(display.lastElementChild);
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
        const digit2s = display.querySelectorAll('.digit2');
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