@extends('layouts.homepage.app')


@section('title', 'Semua Artikel')
@section('content')
@include('sweet::alert')
@include('artikel.sub.list_show')

@endsection
