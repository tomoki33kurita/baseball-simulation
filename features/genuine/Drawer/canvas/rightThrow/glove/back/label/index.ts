import { GenuineState } from '@/features/genuine/types'

export const genuineLabel = (ctx: CanvasRenderingContext2D, state: GenuineState, x: number, y: number, rotate: number, scaleSize: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)

  stand(ctx, '#383838', x, y)
  parts8(ctx, 'gold', x, y)
  parts7(ctx, 'gold', x, y)
  parts6(ctx, 'gold', x, y)
  parts5(ctx, 'gold', x, y)
  parts4(ctx, 'gold', x, y)
  parts3(ctx, 'gold', x, y)
  parts2(ctx, 'gold', x, y)
  parts1(ctx, 'gold', x, y)
  ctx.restore()
}
// const parts = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
//   ctx.beginPath()
//   ctx.strokeStyle = 'red' // '#383838'
//   ctx.fillStyle = color
//   ctx.lineWidth = 0.8
//   ctx.moveTo(357+x, 556+y)
//   // ctx.quadraticCurveTo(350+x, 561+y, 352+x, 568+y)
//   ctx.stroke()
//   ctx.closePath()
// }

const parts1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.7
  ctx.moveTo(336 + x, 557 + y)
  ctx.quadraticCurveTo(341 + x, 554 + y, 347 + x, 558 + y)
  ctx.quadraticCurveTo(341 + x, 557 + y, 345 + x, 562 + y)
  ctx.quadraticCurveTo(350 + x, 562 + y, 350 + x, 562 + y)
  ctx.quadraticCurveTo(352 + x, 561 + y, 354 + x, 556 + y)
  ctx.quadraticCurveTo(350 + x, 555 + y, 350 + x, 555 + y)
  ctx.quadraticCurveTo(356 + x, 552 + y, 356 + x, 552 + y)
  ctx.quadraticCurveTo(358 + x, 544 + y, 358 + x, 544 + y)
  ctx.quadraticCurveTo(351 + x, 546 + y, 350 + x, 544 + y)
  ctx.quadraticCurveTo(356 + x, 538 + y, 363 + x, 539 + y)
  ctx.quadraticCurveTo(366 + x, 544 + y, 366 + x, 544 + y)
  ctx.quadraticCurveTo(370 + x, 540 + y, 370 + x, 540 + y)
  ctx.quadraticCurveTo(369 + x, 532 + y, 364 + x, 530 + y)
  ctx.quadraticCurveTo(365 + x, 524 + y, 362 + x, 520 + y)
  ctx.quadraticCurveTo(366 + x, 514 + y, 366 + x, 520 + y)
  ctx.quadraticCurveTo(366 + x, 525 + y, 366 + x, 525 + y)
  ctx.quadraticCurveTo(369 + x, 524 + y, 372 + x, 518 + y)
  ctx.quadraticCurveTo(372 + x, 511 + y, 364 + x, 514 + y)
  ctx.quadraticCurveTo(351 + x, 519 + y, 351 + x, 521 + y)
  ctx.quadraticCurveTo(340 + x, 526 + y, 340 + x, 537 + y)
  ctx.quadraticCurveTo(334 + x, 539 + y, 334 + x, 548 + y)
  ctx.quadraticCurveTo(330 + x, 550 + y, 335 + x, 552 + y)
  ctx.quadraticCurveTo(339 + x, 546 + y, 339 + x, 546 + y)
  ctx.quadraticCurveTo(336 + x, 554 + y, 336 + x, 554 + y)
  ctx.quadraticCurveTo(335 + x, 556 + y, 336 + x, 557 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.lineWidth = 0.7
  ctx.moveTo(346 + x, 537 + y)
  ctx.quadraticCurveTo(351 + x, 536 + y, 354 + x, 532 + y)
  ctx.quadraticCurveTo(350 + x, 528 + y, 346 + x, 537 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const parts2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.8
  ctx.moveTo(342 + x, 529 + y)
  ctx.quadraticCurveTo(342 + x, 525 + y, 347 + x, 522 + y)
  ctx.quadraticCurveTo(343 + x, 518 + y, 346 + x, 515 + y)
  ctx.quadraticCurveTo(341 + x, 515 + y, 342 + x, 515 + y)
  ctx.quadraticCurveTo(337 + x, 519 + y, 342 + x, 529 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const parts3 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.8
  ctx.moveTo(347 + x, 522 + y)
  ctx.quadraticCurveTo(354 + x, 519 + y, 354 + x, 519 + y)
  ctx.quadraticCurveTo(355 + x, 509 + y, 361 + x, 505 + y)
  ctx.quadraticCurveTo(372 + x, 500 + y, 381 + x, 496 + y)
  ctx.quadraticCurveTo(383 + x, 492 + y, 378 + x, 494 + y)
  ctx.quadraticCurveTo(368 + x, 494 + y, 355 + x, 503 + y)
  ctx.quadraticCurveTo(345 + x, 510 + y, 347 + x, 522 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const parts4 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.8
  ctx.moveTo(355 + x, 519 + y)
  ctx.quadraticCurveTo(367 + x, 506 + y, 392 + x, 500 + y)
  ctx.quadraticCurveTo(394 + x, 497 + y, 395 + x, 492 + y)
  ctx.quadraticCurveTo(392 + x, 492 + y, 390 + x, 494 + y)
  ctx.quadraticCurveTo(369 + x, 502 + y, 369 + x, 502 + y)
  ctx.quadraticCurveTo(358 + x, 503 + y, 355 + x, 519 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const parts5 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.8
  ctx.moveTo(370 + x, 511 + y)
  ctx.quadraticCurveTo(385 + x, 520 + y, 385 + x, 520 + y)
  ctx.quadraticCurveTo(392 + x, 521 + y, 392 + x, 531 + y)
  ctx.quadraticCurveTo(407 + x, 517 + y, 435 + x, 512 + y)
  ctx.quadraticCurveTo(422 + x, 508 + y, 398 + x, 515 + y)
  ctx.quadraticCurveTo(384 + x, 510 + y, 384 + x, 508 + y)
  ctx.quadraticCurveTo(401 + x, 505 + y, 404 + x, 506 + y)
  ctx.quadraticCurveTo(393 + x, 497 + y, 370 + x, 511 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const parts6 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.8
  ctx.moveTo(378 + x, 576 + y)
  ctx.quadraticCurveTo(385 + x, 568 + y, 385 + x, 568 + y)
  ctx.quadraticCurveTo(398 + x, 570 + y, 398 + x, 572 + y)
  ctx.quadraticCurveTo(413 + x, 571 + y, 426 + x, 565 + y)
  ctx.quadraticCurveTo(414 + x, 556 + y, 390 + x, 560 + y)
  ctx.quadraticCurveTo(404 + x, 555 + y, 421 + x, 560 + y)
  ctx.quadraticCurveTo(438 + x, 565 + y, 463 + x, 555 + y)
  ctx.quadraticCurveTo(463 + x, 550 + y, 463 + x, 550 + y)
  ctx.quadraticCurveTo(458 + x, 552 + y, 454 + x, 550 + y)
  ctx.quadraticCurveTo(418 + x, 548 + y, 418 + x, 548 + y)
  ctx.quadraticCurveTo(403 + x, 547 + y, 395 + x, 553 + y)
  ctx.quadraticCurveTo(405 + x, 543 + y, 430 + x, 545 + y)
  ctx.quadraticCurveTo(464 + x, 547 + y, 464 + x, 547 + y)
  ctx.quadraticCurveTo(480 + x, 544 + y, 486 + x, 535 + y)
  ctx.quadraticCurveTo(491 + x, 527 + y, 488 + x, 524 + y)
  ctx.quadraticCurveTo(470 + x, 531 + y, 462 + x, 532 + y)
  ctx.quadraticCurveTo(431 + x, 536 + y, 419 + x, 537 + y)
  ctx.quadraticCurveTo(391 + x, 545 + y, 391 + x, 547 + y)
  ctx.quadraticCurveTo(404 + x, 535 + y, 428 + x, 533 + y)
  ctx.quadraticCurveTo(459 + x, 529 + y, 459 + x, 529 + y)
  ctx.quadraticCurveTo(488 + x, 524 + y, 494 + x, 504 + y)
  ctx.quadraticCurveTo(495 + x, 494 + y, 495 + x, 494 + y)
  ctx.quadraticCurveTo(475 + x, 503 + y, 438 + x, 514 + y)
  ctx.quadraticCurveTo(415 + x, 519 + y, 395 + x, 533 + y)
  ctx.quadraticCurveTo(382 + x, 538 + y, 379 + x, 552 + y)
  ctx.quadraticCurveTo(375 + x, 569 + y, 375 + x, 569 + y)
  ctx.quadraticCurveTo(378 + x, 576 + y, 378 + x, 576 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const parts7 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.8
  ctx.moveTo(371 + x, 526 + y)
  ctx.quadraticCurveTo(380 + x, 530 + y, 374 + x, 538 + y)
  ctx.quadraticCurveTo(364 + x, 555 + y, 364 + x, 555 + y)
  ctx.quadraticCurveTo(360 + x, 571 + y, 374 + x, 576 + y)
  ctx.quadraticCurveTo(366 + x, 563 + y, 375 + x, 548 + y)
  ctx.quadraticCurveTo(383 + x, 537 + y, 385 + x, 527 + y)
  ctx.quadraticCurveTo(382 + x, 519 + y, 376 + x, 520 + y)
  ctx.quadraticCurveTo(378 + x, 524 + y, 380 + x, 525 + y)
  ctx.quadraticCurveTo(371 + x, 526 + y, 371 + x, 526 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const parts8 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 0.8
  ctx.moveTo(357 + x, 556 + y)
  ctx.quadraticCurveTo(350 + x, 561 + y, 352 + x, 568 + y)
  ctx.quadraticCurveTo(353 + x, 580 + y, 367 + x, 580 + y)
  ctx.quadraticCurveTo(368 + x, 579 + y, 367 + x, 577 + y)
  ctx.quadraticCurveTo(356 + x, 565 + y, 361 + x, 558 + y)
  ctx.quadraticCurveTo(359 + x, 553 + y, 357 + x, 556 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const stand = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.lineWidth = 1
  ctx.moveTo(382 + x, 487 + y)
  ctx.quadraticCurveTo(355 + x, 492 + y, 342 + x, 511 + y)
  ctx.quadraticCurveTo(332 + x, 513 + y, 338 + x, 535 + y)
  ctx.quadraticCurveTo(328 + x, 541 + y, 329 + x, 553 + y)
  ctx.quadraticCurveTo(330 + x, 563 + y, 339 + x, 564 + y)
  ctx.quadraticCurveTo(341 + x, 571 + y, 349 + x, 571 + y)
  ctx.quadraticCurveTo(347 + x, 582 + y, 360 + x, 587 + y)
  ctx.quadraticCurveTo(365 + x, 589 + y, 371 + x, 585 + y)
  ctx.quadraticCurveTo(380 + x, 587 + y, 388 + x, 576 + y)
  ctx.quadraticCurveTo(399 + x, 581 + y, 413 + x, 576 + y)
  ctx.quadraticCurveTo(419 + x, 572 + y, 430 + x, 573 + y)
  ctx.quadraticCurveTo(432 + x, 568 + y, 432 + x, 568 + y)
  ctx.quadraticCurveTo(450 + x, 573 + y, 470 + x, 557 + y)
  ctx.quadraticCurveTo(469 + x, 552 + y, 469 + x, 552 + y) // 左下
  ctx.quadraticCurveTo(494 + x, 544 + y, 493 + x, 523 + y)
  ctx.quadraticCurveTo(490 + x, 518 + y, 490 + x, 518 + y)
  ctx.quadraticCurveTo(501 + x, 508 + y, 499 + x, 492 + y)
  ctx.quadraticCurveTo(495 + x, 483 + y, 484 + x, 491 + y)
  ctx.quadraticCurveTo(476 + x, 497 + y, 439 + x, 505 + y)
  ctx.quadraticCurveTo(422 + x, 504 + y, 409 + x, 507 + y)
  ctx.quadraticCurveTo(408 + x, 498 + y, 400 + x, 497 + y)
  ctx.quadraticCurveTo(403 + x, 486 + y, 396 + x, 487 + y)
  ctx.quadraticCurveTo(389 + x, 486 + y, 386 + x, 491 + y)
  ctx.quadraticCurveTo(386 + x, 486 + y, 382 + x, 487 + y)
  // ctx.
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
