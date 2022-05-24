import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {By} from '@angular/platform-browser';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TennisGame1Component} from './tennis-game1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const testImports = [
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  MatCardModule
];

describe('Tennis Game 1', () => {
  let component: TennisGame1Component;
  let fixture: ComponentFixture<TennisGame1Component>;

  beforeEach((() => {
    TestBed.configureTestingModule({declarations: [TennisGame1Component], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: testImports});
    fixture = TestBed.createComponent(TennisGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('Scoring', () => {

    it('should have correct initial values before any scores are entered', () => {
      const playerScoreOne = fixture.debugElement.query(By.css('#player-one-score'));
      const playerScoreTwo = fixture.debugElement.query(By.css('#player-two-score'));
      expect(playerScoreOne.properties.value.toString()).toBe('0');
      expect(playerScoreTwo.properties.value.toString()).toBe('0');
    });

    describe('Score Input', () => {
      let player1ScoreInputElement;
      let player2ScoreInputElement;

      beforeEach(() => {
        player1ScoreInputElement = fixture.debugElement.query(By.css('#player-one-score'));
        player2ScoreInputElement = fixture.debugElement.query(By.css('#player-two-score'));
      });

      it('should only allow numbers', () => {
      });

      it('should prevent large numbers via the incrementer button', () => {
      });

      it('should prevent negative numbers via the decrementer button', () => {
      });
    });
  });
});
