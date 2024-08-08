document.querySelector('.keypad').addEventListener('click', function(event) {
    const display = document.querySelector('.number');
    const button = event.target;
    const ctaPop = document.querySelector('.CTA');

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

            if (digitSpans.length === 3 && Digit2Span) {
                display.removeChild(Digit2Span);
            }

            if (digitSpans.length === 4 && Digit2Span) {
                display.insertBefore(Digit2Span, digitSpans[0].nextSibling);
            }

            if (digitSpans.length === 5 && Digit2Span) {
                display.insertBefore(Digit2Span, digitSpans[1].nextSibling);
            }

            if (digitSpans.length === 6 && Digit2Span) {
                digit2s.forEach(digit2 => {
                    if (digit2) display.removeChild(digit2);
                });
                display.insertBefore(Digit2Span, digitSpans[2].nextSibling);
            }

            if (digitSpans.length === 7) {
                digit2s.forEach(digit2 => {
                    if (digit2) display.removeChild(digit2);
                });
                if (Digit2Span) display.insertBefore(Digit2Span, digitSpans[0].nextSibling);

                const additionalDigit2Span = document.createElement('span');
                additionalDigit2Span.textContent = ',';
                additionalDigit2Span.classList.add('digit2');
                additionalDigit2Span.classList.add('show');
                display.insertBefore(additionalDigit2Span, digitSpans[3].nextSibling);
            }

            if (digitSpans.length === 8) {
                digit2s.forEach(digit2 => {
                    if (digit2) display.removeChild(digit2);
                });
                if (Digit2Span) display.insertBefore(Digit2Span, digitSpans[1].nextSibling);

                const additionalDigit2Span = document.createElement('span');
                additionalDigit2Span.textContent = ',';
                additionalDigit2Span.classList.add('digit2');
                additionalDigit2Span.classList.add('show');
                display.insertBefore(additionalDigit2Span, digitSpans[4].nextSibling);
            }

            if (display.childElementCount === 0) {
                const placeholder = document.createElement('h2');
                placeholder.textContent = '얼마나 옮길까요?';
                display.appendChild(placeholder);
                ctaPop.style.height = '0px';
            }
        } else {
            // 숫자 버튼 처리
            if (display.querySelector('h2')) {
                display.removeChild(display.querySelector('h2'));
                ctaPop.style.height = '50px';
            }

            digit2s.forEach(s => {
                const next = s.nextSibling;
                if (next) {
                    display.insertBefore(s, next.nextSibling);
                }
            });

            if (button.classList.contains('btn00')) {
                const digitSpan1 = document.createElement('span');
                digitSpan1.classList.add('digit');
                digitSpan1.textContent = '0';
                
                const digitSpan2 = document.createElement('span');
                digitSpan2.classList.add('digit');
                digitSpan2.textContent = '0';

                display.appendChild(digitSpan1);
                display.appendChild(digitSpan2);

                requestAnimationFrame(() => {
                    digitSpan1.classList.add('show');
                    digitSpan2.classList.add('show');
                });

                const digitSpans = display.querySelectorAll('.digit');
                const Digit2Span = display.querySelector('.digit2');

                if (digitSpans.length === 3 && Digit2Span) {
                    display.removeChild(Digit2Span);
                }
    
                if (digitSpans.length === 4 && Digit2Span) {
                    display.insertBefore(Digit2Span, digitSpans[0].nextSibling);
                }
    
                if (digitSpans.length === 5) {
                    const additionalDigit2Span = document.createElement('span');
                    additionalDigit2Span.textContent = ',';
                    additionalDigit2Span.classList.add('digit2');
                    additionalDigit2Span.classList.add('show');
                    display.insertBefore(additionalDigit2Span, digitSpans[1].nextSibling);
                }
    
                if (digitSpans.length === 6) {
                    digit2s.forEach(digit2 => {
                        if (digit2) display.removeChild(digit2);
                    });
                    display.insertBefore(Digit2Span, digitSpans[2].nextSibling);
                }
    
                if (digitSpans.length === 7) {
                    digit2s.forEach(digit2 => {
                        if (digit2) display.removeChild(digit2);
                    });
                    // if (Digit2Span) display.insertBefore(Digit2Span, digitSpans[0].nextSibling); // 참고
    
                    const additionalDigit2Span = document.createElement('span');
                    additionalDigit2Span.textContent = ',';
                    additionalDigit2Span.classList.add('digit2');
                    additionalDigit2Span.classList.add('show');
                    display.insertBefore(additionalDigit2Span, digitSpans[3].nextSibling);
                }
    
                if (digitSpans.length === 8) {
                    digit2s.forEach(digit2 => {
                        if (digit2) display.removeChild(digit2);
                    });
                    if (Digit2Span) display.insertBefore(Digit2Span, digitSpans[1].nextSibling);
    
                    const additionalDigit2Span = document.createElement('span');
                    additionalDigit2Span.textContent = ',';
                    additionalDigit2Span.classList.add('digit2');
                    additionalDigit2Span.classList.add('show');
                    display.insertBefore(additionalDigit2Span, digitSpans[4].nextSibling);
                }

                 
                if (digitSpans.length === 9) {
                    digit2s.forEach(digit2 => {
                        if (digit2) display.removeChild(digit2);
                    });
                    if (Digit2Span) display.insertBefore(Digit2Span, digitSpans[2].nextSibling);
    
                    const additionalDigit2Span = document.createElement('span');
                    additionalDigit2Span.textContent = ',';
                    additionalDigit2Span.classList.add('digit2');
                    additionalDigit2Span.classList.add('show');
                    display.insertBefore(additionalDigit2Span, digitSpans[5].nextSibling);
                }
            } else {
                const digitSpan = document.createElement('span');
                digitSpan.classList.add('digit');
                digitSpan.textContent = value;
                display.appendChild(digitSpan);

                requestAnimationFrame(() => {
                    digitSpan.classList.add('show');
                });
            }

            const digitSpans = display.querySelectorAll('.digit');
            const digit2Span = document.createElement('span');
            if (digitSpans.length > 1 && digitSpans.length % 3 === 1) {
                digit2Span.classList.add('digit2');
                digit2Span.textContent = ',';
                display.insertBefore(digit2Span, digitSpans[0].nextSibling);
            }

            requestAnimationFrame(() => {
                digit2Span.classList.add('show');
            });
        }
    }
});


document.querySelector('.CTA').addEventListener('click', function(){
    alert('이것만 입금하게?? 쪼금만 더 맘 써보자~');
    location.reload();
});