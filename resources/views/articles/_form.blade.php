











   <div class="form-group{{ $errors->has('color') ? ' is-invalid' : '' }}">
        <label for="color" class="contol-label sr-only">color</label>
  <input id="color" name="color" type="text" placeholder="couleur de produit" class="form-control{{ $errors->has('color') ? ' is-invalid' : '' }}" value="{{ old('color') ?? $articles->color }}">
        {!! $errors->first('color', '<span class="text-danger">:message</span>') !!}
   </div>

   <div class="form-group{{ $errors->has('location') ? ' has-error' : '' }}">
        <label for="location" class="contol-label sr-only">Titre</label>
        <input id="location" name="location" type="text" placeholder="adresse du vender" class="form-control{{ $errors->has('location') ? ' is-invalid' : '' }}" value="{{ old('location') ?? $articles->location }}"> 
        {!! $errors->first('location', '<span class="text-danger">:message</span>') !!}
   </div>

   <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
        <label for="state" class="contol-label sr-only">Titre</label>
        <input id="state" name="state" type="text" placeholder="ville" class="form-control{{ $errors->has('state') ? ' is-invalid' : '' }}" value="{{ old('state') ?? $articles->state }}">
        {!! $errors->first('state', '<span class="text-danger">:message</span>') !!}
   </div>
 
 <input type="submit" value="{{ $submitButtonText }}"  class="btn btn-primary btn-block">