// tests go here; this will not be compiled when this package is used as a library

//Control motor A forward and set speed
Borsuk.MotorRun(Motor.A, Dir.forward, 0)

//Stop motor
Borsuk.MotorStop(Motor.A)

//Turn the steering gear S0 to the starting position
Borsuk.ServosTurnZero(Servo.S0)

//Turn the steering gear S0 to the maximum position
Borsuk.ServosTurnFull(Servo.S0)

//Stop Servo
Borsuk.ServoStop(Servo.S0)

//Servo Turn Angle
Borsuk.ServoTurnAngle(Servo.S1, 180)

//
Borsuk.ServoMotorForward(Servo.S1, 180)
Borsuk.ServoMotorBack(Servo.S1, 180)
